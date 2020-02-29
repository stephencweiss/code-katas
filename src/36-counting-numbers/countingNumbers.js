const validEnds = {
  0: [4, 6],
  1: [6, 8],
  2: [7, 9],
  3: [4, 8],
  4: [0, 3, 9],
  6: [0, 1, 7],
  7: [2, 6],
  8: [1, 3],
  9: [2, 4],
}

let globalCount = 0
function countNumbers(startNum, numDigits) {
  findAvailableLPoints(startNum, numDigits - 1)
  return globalCount
}

function findAvailableLPoints(startNum, numDigits) {
  if (numDigits === 0) {
    return (globalCount += 1)
  }

  const lPoints = validEnds[startNum]

  lPoints.forEach(l => findAvailableLPoints(l, numDigits - 1))
}

console.log(countNumbers(0, 2))
globalCount = 0;
console.log(countNumbers(0, 3))