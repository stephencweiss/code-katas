function miniMaxSum(anArray) {
  // make sure that the array is in the right order
  debugger
  anArray.sort(compareNumbers)
  let miniSum = 0
  let maxSum = 0
  for (let i = 0; i < anArray.length - 1; i++) {
    miniSum += anArray[i]
  }
  for (let j = anArray.length - 1; j > 0; j--) {
    maxSum += anArray[j]
  }
  console.log(miniSum + ' ' + maxSum)
}

function compareNumbers(a, b) {
  return a - b
}

miniMaxSum([1, 5, 2, 3, 4])
