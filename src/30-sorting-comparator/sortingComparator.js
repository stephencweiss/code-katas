const fs = require('fs')

function main() {
  return readInput(
    '/Users/stephen/_coding/personal/katas/hackerRankChallenges/src/30-sorting-comparator/sampleInput'
  )
    .then(res => sortInput(res))
    .then(sorted => console.log(sorted))
}

function readInput(filePath) {
  return new Promise((resolve, reject) =>
    fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(new Error(`Failed to read`))
      }
      const arr = data.split('\n')
      arr.shift()
      resolve(arr)
    })
  )
}

/**
 * I: data: array of data where all values are space separated [name value]
 * O: An array of tuples - of the space separated values
 * C: n for the tuple creation + nlog(n) for the sort where n is the number of elements in the array
 */
function sortInput(unsortedArray) {
  const unsortedTuples = unsortedArray.map(el => el.split(' '))
  return unsortedTuples.sort(sortByScoreAndName)
}

/**
 * @argument a array [name, score]
 * @argument b array [name, score]
 */
function sortByScoreAndName(a, b) {
  if (Number.parseInt(a[1], 10) < Number.parseInt(b[1], 10)) {
    return 1
  } else if (
    Number.parseInt(a[1], 10) == Number.parseInt(b[1], 10) &&
    a[0] < b[0]
  ) {
    return 1
  } else return -1
}

main()
