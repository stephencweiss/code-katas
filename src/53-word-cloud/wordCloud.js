function wordCloud(str){
    const words = str.replace(/[^a-z-]/gi," ").split(' ')
    const cloud = new Map()
    console.log(words)
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

wordCloud("After beating the eggs, Dana read the next step:\nAdd milk and eggs, then add flour and sugar. Co-operation")