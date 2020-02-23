function aVeryBigSum(ar) {
  debugger
  let arraySum = 0
  for (let i = 0; i < ar.length; i++) {
    arraySum += ar[i]
  }
  return arraySum
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
