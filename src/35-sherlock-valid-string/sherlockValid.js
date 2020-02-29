const fs = require('fs')

function main(filePath) {
  readInput(filePath)
    .then(input => input.forEach(str => isValid(str)))
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

function isValid(s) {
  const charactersArray = Array(26).fill(0)
  s.split('').forEach(
    char => (charactersArray[transformCodeToIndex(stringToCharCode(char))] += 1)
  )
  const filteredCharacters = charactersArray.filter(el => el > 0) // absent characters shouldn't be considered

  // convert to object {timesLetterAppeared: uniqueLettersWithThisAppearanceCount }
  const occurrences = filteredCharacters.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] += 1
    } else {
      acc[cur] = 1
    }
    return acc
  }, {})

  const lettersPresent = Object.values(occurrences).reduce(
    (acc, cur) => acc + cur
  )
  if (lettersPresent > 26) {
    throw Error('object is not created as expected')
  }

  const uniqueLetters = Object.values(occurrences).length
  const apperances = Object.keys(occurrences)
  let result = 'NO'

  if (uniqueLetters === 1) {
    result = 'YES'
  }
  if (uniqueLetters === 2) {
    if (occurrences[1] === 1) {
      result = 'YES'
    }
    if (
      apperances[1] - apperances[0] === 1 &&
      occurrences[apperances[1]] === 1
    ) {
      result = 'YES'
    }
  }
  return result
}

function stringToCharCode(character) {
  return character.toUpperCase().charCodeAt()
}

function transformCodeToIndex(charCode) {
  return charCode - 65
}

main(
  '/Users/stephen/_coding/personal/katas/hackerRankChallenges/src/35-sherlock-valid-string/sampleInput'
)
