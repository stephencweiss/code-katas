const fs = require('fs')

function main(filePath) {
  readInput(
    filePath
  )
    .then(input => input.forEach(stringLine => alternatingCharacters(stringLine)))
    .then(result => console.log({ result }))
}

function readInput(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(err)
      }
      let unformatted = data.split('\n')
      unformatted.shift()
      resolve(unformatted)
    })
  })
}

function alternatingCharacters(stringLine){
    let start = 0;
    let end = 1;
    let deletions = 0;
    const characters = stringLine.split('')
    while (start < characters.length) {
        if (characters[start] === characters[end]){
            deletions += 1;
            end +=1
        } else {
            start = end;
            end = start + 1;
        }
    }
    return deletions
}


main('/Users/stephen/_coding/personal/katas/hackerRankChallenges/src/34-alternating-characters/sampleInput')