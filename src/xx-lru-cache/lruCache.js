class LRUCache {
    constructor(capacity) {
        this.keys = new Map() // key, position
        this.queue = [] // {key: value}[]
        this._capacity = capacity
    }

    get(key) {
        if (this.keys.has(key)) {
            return this._moveKeyToFront(key)
        }
        return -1
    }
    set(key, value) {
        // already present
        if (this.keys.has(key)) {
            this._moveKeyToFront(key)
            this.queue[0] = { key, value }
            return
        }
        // new value
        if (this._isFull()) {
            const entry = this.queue.pop()
            this.keys.delete(entry.key)
        }
        this.queue.unshift({ key, value })
        this.queue.forEach(({ key }, index) => this.keys.set(key, index))
    }

    _moveKeyToFront(key) {
        const keyPosition = this.keys.get(key)
        const value = this.queue.splice(keyPosition, 1)
        this.queue.unshift(...value)
        this.queue.forEach(({ key }, index) => this.keys.set(key, index))
        return value[0]
    }
    _isFull() {
        return !(this.queue.length < this._capacity)
    }
}

const cache = new LRUCache(3)

cache.set(1, 1)
cache.set(2, 2)
cache.set(1, 18)
console.log(cache.get(1))
console.log(cache.get(2))
cache.set(3, 3)
cache.set(4, 4)
cache.set(5, 5)
console.log(cache.get(2))
