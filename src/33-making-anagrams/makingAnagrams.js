const fs = require('fs')

function main(filePath) {
  readInput(
    filePath
  )
    .then(input => makeAnagram(input[0], input[1]))
    .then(result => console.log({ result }))
}

function readInput(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(err)
      }
      let unformatted = data.split('\n')
      resolve(unformatted)
    })
  })
}

function makeAnagram(a,b){
    // store all letters in an array by count
    const initialArray = a.split('')
    const comparisonArray = b.split('')

    const storage = Array(26).fill(0)

    initialArray.forEach(letter => {
        const index = transformCodeToIndex(stringToCharCode(letter))
        return storage[index] += 1
    })

    // find the difference array (|b-a|)
    comparisonArray.forEach(letter => {
        const index = transformCodeToIndex(stringToCharCode(letter))
        return storage[index] = (storage[index] - 1)
    })

    // reduce the array to a number
    const difference = storage.reduce((accumulator, currentVal) => accumulator + Math.abs(currentVal), 0)

    return difference;
}

function stringToCharCode(character){
    return character.toUpperCase().charCodeAt()
}

function transformCodeToIndex(charCode) {
    return charCode - 65
}

main('/Users/stephen/_coding/personal/katas/hackerRankChallenges/src/33-making-anagrams/sampleInput')