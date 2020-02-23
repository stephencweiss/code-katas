const fs = require('fs')

fs.readFile('/Users/stephen/_coding/personal/katas/hackerRankChallenges/src/30-sorting-comparator/sampleInput', {encoding: 'utf8'}, (err, data) => {
    if (err) { throw new Error(`Failed to read`)}
    console.log({data})
})



