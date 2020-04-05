function wordCloud(str){
    const words = str.replace(/[^a-z-]/gi," ").split(' ')
    const cloud = new Map()
    words.forEach(word => {
        if(word.length === 0) return;
        const lower = word.toLowerCase()
        if( cloud.has(lower)){
            const prevValue = cloud.get(lower)
            cloud.set(lower, prevValue + 1)
        } else {
            cloud.set(lower, 1)
        }
    })
    return cloud
}

module.exports = {wordCloud}


// The big challenge here was that splitting on spaces was _not_ the right way to go. Basically, we wanted to implement our own split function, which is what I did by replacing non-alpha characters with a space, then splitting on space.
// There are definite challenges here. For example, possives become two words: i.e. 'Bill's' becomes 'Bill s'
// Additionally, it's a little rough around emdashes - like that one, since that would become its own word.

// A better implementation would include the following
// - handling nouns
// - handling possessives
// - handling concepts (i.e. two word ideas like New York)