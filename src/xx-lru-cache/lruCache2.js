class LRUCache {
    constructor(capacity) {
        this.cache = new Map() // key, position
        this.queue = new Set()
        this._capacity = capacity
    }

    get(key) {
        if (this.cache.has(key)) {
            this.queue.delete(key)
            this.queue.add(key)
            return this.cache.get(key)
        }
        return -1
    }

    put(key, value) {
        // already present
        if (this.cache.has(key)) {
            this.queue.delete(key)
        }
        while (this._isFull()) {
            const [first] = this.queue
            this.queue.delete(first)
            this.cache.delete(first)
        }
        this.queue.add(key)
        this.cache.set(key, value)
    }

    _isFull() {
        return this.queue.size >= this._capacity
    }
}

const cache = new LRUCache(3)

cache.put(1, 1)
cache.put(2, 2)
cache.put(1, 18)
console.log(cache.get(1))
console.log(cache.get(2))
cache.put(3, 3)
cache.put(4, 4)
cache.put(5, 5)
console.log(cache.get(2))
