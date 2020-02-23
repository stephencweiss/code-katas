const fs = require('fs')

/**
 * I: data: array of data where all values are space separated [name value]
 * O: An array of tuples - of the space separated values
 */
function sortInput(data) {
  return
}

function readInput(filePath) {
  return new Promise((resolve, reject) =>
    fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(new Error(`Failed to read`))
      }
      const arr = data.split('\n')
      arr.shift()
      console.log({ data, arr })
      resolve(arr)
    })
  )
}

function main() {
  return readInput(
    '/Users/stephen/_coding/personal/katas/hackerRankChallenges/src/30-sorting-comparator/sampleInput'
  ).then(res => sortInput(res))
}

main()
