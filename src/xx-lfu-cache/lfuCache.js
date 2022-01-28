class LFUCache {
    constructor(capacity) {
        this.capacity = 0
        this.cache = new Map()
        this.frequencyMap = new Map()
        this.minFrequency = 0
        this.capacity = capacity
    }
    get(key) {
        if (!this.capacity || !this.cache.has(key)) return -1

        const { value, count } = this.cache.get(key)
        const newCount = count + 1
        this.cache.set(key, { value, count: newCount })
        const frequencySet = this.frequencyMap.get(count) ?? new Set()
        frequencySet.delete(key)

        // update minFrequency potentiall
        if (count <= this.minFrequency && frequencySet.size === 0) {
            this.minFrequency = newCount
        }

        // move key to newCount
        if (this.frequencyMap.has(newCount)) {
            this.frequencyMap.get(newCount).add(key)
        } else {
            const set = new Set([key])
            this.frequencyMap.set(newCount, set)
        }
        if (
            this.frequencyMap.has(count) &&
            this.frequencyMap.get(count).size === 0
        ) {
            this.frequencyMap.delete(count)
        }

        return value
    }

    put(key, value) {
        if (this.capacity === 0) return
        // already in cache?
        if (this.cache.has(key)) {
            const { count } = this.cache.get(key)
            this.cache.set(key, { value, count }) // update value
            return this.get(key) // handles the frequencyMap
        }
        // at capacity
        while (this._isFull()) {
            this._removeLeastFrequentlyUsed()
        }
        // add to cache
        // add to frequencyMap
        this.cache.set(key, { value, count: 0 })
        this.get(key) // handles the frequencyMap
    }

    _isFull() {
        return this.cache.size >= this.capacity
    }

    _removeLeastFrequentlyUsed() {
        // given the min frequency
        // remove the first element in the set from the frequencySet and Cache
        const frequencySet = this.frequencyMap.get(this.minFrequency)
        const [first] = frequencySet
        frequencySet.delete(first)

        this.cache.delete(first)
        // if it's the last element in the set, we need to find the _next_ minFrequency
        if (frequencySet.size === 0) {
            this.frequencyMap.delete(this.minFrequency)
            // this is potentially expensive
            const frequencies = [...this.frequencyMap.keys()]
            if (frequencies.length == 0) {
                this.minFrequency = 0
            } else {
                const newMinFrequency = frequencies.reduce(
                    (acc, cur) => (acc < cur ? acc : cur),
                    Infinity
                )
                this.minFrequency = newMinFrequency
            }
        }
    }
}

const lfuCache = new LFUCache(3)

console.log(lfuCache.put(1, 1))
console.log(lfuCache.put(1, 2))
console.log(lfuCache.put(1, 1))
console.log(lfuCache.put(2, 2))
console.log(lfuCache.put(3, 3))
console.log(lfuCache.get(2))
console.log(lfuCache.get(3))
console.log(lfuCache.get(3))
console.log(lfuCache.put(4, 4))
console.log(lfuCache.get(2))
