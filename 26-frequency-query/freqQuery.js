'use strict'

const fs = require('fs')
const path = require('path')

const puzzleInput = path.resolve(__dirname, './puzzle-input')
const sampleInput = path.resolve(__dirname, './sample-input')

let logString = ''
let logEntries = []

// debugger
const readPuzzleInput = file => {
  // I: A file with sample data
  // O: An array of numbers
  return new Promise((resolve, reject) => {
    let readStream = fs.createReadStream(file, { encoding: 'utf8' })

    readStream
      .on('data', function processChunk(chunk) {
        logString += chunk
      })
      .on('end', () => {
        logEntries = logString.split('\n')
        resolve(logEntries)
      })
  })
}

/**
 * Frequency Queries
 * Queries - There are n queries in the form of a tuple.
 * The first element reflects the operation. 1 = Insert, 2 = Delete, 3 = SearchFor
 * The second element reflects the target value.
 *
 * @arg {Array} queries - A two-dimensional array of queries
 * @returns {Array} Answers - The result of finding the searched for parameter with a query 3
 */
function freqQuery(queries) {
  debugger

  const storage = {}
  const frequencies = {}
  const answers = []
  queries.forEach(query => {
    const qType = Number(query[0])
    const qVal = Number(query[1])
    switch (qType) {
      // insert an occurrence of the qVal
      case 1:
        insertValue(qVal, storage, frequencies)
        break
      // delete an occurrence of the qVal
      case 2:
        deleteValue(qVal, storage, frequencies)
        break
      // look up a frequency count, and if it exists, add 1 to answers, else 0
      case 3:
        evaluateFrequencies(qVal, frequencies, answers)
      // if a qVal exists as a key in frequencies, push 1 to answers
      // else push 0 to answers
    }
  })
  return answers
}

function insertValue(val, storage, frequencies) {
  // set a value as the storage of the qVal (i.e. return the frequencies we've stored with the value in storage)
  const count = storage[val] // if the val exists, return the previous count, else undefined
  const newCount = count ? count + 1 : 1 // if it exists, increment the count, else 1
  // look for the existing frequencies (i.e. the return of looking up the value in the frequencies)
  const prevFreq = frequencies[newCount - 1]
  const freq = frequencies[newCount]

  const freqArr = freq ? freq : []

  // if existing frequencies is defined
  // find the occurence of qVal and delete it
  if (prevFreq) {
    const idx = prevFreq.indexOf(val) // find the index for the value in our frequency array
    prevFreq.splice(idx, 1) // delete just one element from the prevFreq array
    frequencies[count] = prevFreq // establish the value for the old count as an array without our val
  }

  // add the qVal to newFrequencies
  freqArr.push(val)
  frequencies[newCount] = freqArr
  // increment the count in storage
  storage[val] = newCount
}

function deleteValue(val, storage, frequencies) {
  const count = storage[val]
  // an occurrence can only be deleted if it already exists in storage
  if (count !== undefined && count !== 0) {
    const newCount = count - 1
    const freq = frequencies[newCount]
    const prevFreq = frequencies[newCount + 1]

    const freqArr = freq ? freq : []
    // find the qVal in the frequencyArr and remove it
    const idx = prevFreq.indexOf(val)
    prevFreq.splice(idx, 1)
    frequencies[newCount + 1] = prevFreq

    freqArr.push(val)
    frequencies[newCount] = freq
    storage[val] = newCount
  }
}

function evaluateFrequencies(frequency, frequencies, answers) {
  if (frequencies[frequency] && frequencies[frequency].length > 0) {
    answers.push(1)
  } else {
    answers.push(0)
  }
}

const queries = [
  [1, 3],
  [1, 4],
  [1, 3],
  [2, 3],
  [3, 1],
]
console.log(freqQuery(queries))

// Promise.resolve(readPuzzleInput(puzzleInput))
// .then(queryStream => {
//   return queryStream.map((el) => el.split(' '))
// })
// .then(queries => freqQuery(queries))
// .then(answer => console.log(`the answer is -> `, answer));
