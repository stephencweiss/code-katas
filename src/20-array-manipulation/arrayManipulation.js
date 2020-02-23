function findDifferenceArray(n, queries) {
  // make an array of 0s that is n length;
  const arr = [...Array(n)].fill(0)

  // for each query, find the difference between where the layer starts and the preceding step
  for (let i = 0; i < queries.length; i += 1) {
    // where the query *starts* building
    arr[queries[i][0] - 1] += queries[i][2]
    // what about the difference for the step *after* we *stop* building?
    if (arr[queries[i][1]] !== undefined) {
      arr[queries[i][1]] -= queries[i][2]
    }
  }
  return arr
}

function arrayManipulation(n, queries) {
  let max = 0

  arr = findDifferenceArray(n, queries)

  // build out the final array
  for (let j = 1; j < n; j++) {
    arr[j] += arr[j - 1]
    // check for max
    if (arr[j] > max) {
      max = arr[j]
    }
  }
  return max
}

const n = 6
const queries = [
  [1, 4, 2],
  [2, 3, 2],
  [2, 2, 2],
]

console.log(findDifferenceArray(n, queries))
console.log(arrayManipulation(n, queries))
