// this is a WIP
// need to more efficiently store the counts so that i don't need to look through _all_ of the items when we get to capacity.
// by having _two_ caches (more space) we can make each of the operations much more efficient
// basically - a get will look to see if it exists in the main cache
    // if it does, it will move it in the cacheByCount to the next stage (and update the accessed value there only)
// a setter does a similar thing, but with more nuance
    // first it checks if it already exists
        // if it does - it doesn't do anything in the main cache
        // but in the cacheByCount, it moves it to the next number (i.e. the key for the count)
    // if it doesn't exist
        // we check capacity (by looking at the size of the main cache - where each item is stored separately)
            // if we're at capacity, we go _first_ to cacheByCount and remove the least recently used of the leastFrequentlyUsed category
                // e.g., if we have 3 keys that have never been called since they were set, we will select the _oldest_ of the trio
        // now we set it the newly declared key/value first in the main cache
            // then we follow up and add it to the cacheByCount

class LFUCache {
    capacity = 0
    cache = new Map()
    cacheByCount = new Map()
    leastUsed = 0
    constructor(capacity){
      this.capacity = capacity
    }
    get(key){
      if(this.cache.has(key)){
        let item = this.cache.get(key)
        this.updateLeastUsed(item)
        item.count += 1
        item.accessed = new Date()
        this.cache.set(key, item)
        return item.value
      }
      return -1
    }
    set(key, value){

      if(this.cache.has(key)){
        let item = this.cache.get(key)
        item.count += 1
        item.accessed = new Date()
        item.value = value
        this.cache.set(key, item)
        return
      }
      // at capacity?
      if(this.cache.size === this.capacity){
        this.removeLeastFrequentlyUsed()
      }

      this.cache.set(key, {count:0, accessed: new Date(), value})
    }

    removeLeastFrequentlyUsed(){
      // find all candidates with the lowest count
      // sort by accessed date descending (recent -> older)
      // remove least recent accessed (i.e. the end of the list)
    }
    remove(key){
      this.cache.delete(key)
    }

    updateLeastUsed(item){
      if(item.)
    }
  }