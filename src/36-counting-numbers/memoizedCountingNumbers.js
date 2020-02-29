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
let invocations = 0
function countNumbers(startNum, numDigits) {
  findAvailableLPoints(startNum, numDigits - 1)
  return globalCount
}

function findAvailableLPoints(startNum, numDigits) {
  invocations += 1
  if (numDigits === 0) {
    return (globalCount += 1)
  }

  const lPoints = validEnds[startNum]

  lPoints.forEach(l => findAvailableLPoints(l, numDigits - 1))
}

function memoize (func) {
    const cache = {};
    return function () {
        console.log(`cache ->`, cache)
        const key = JSON.stringify(arguments)
        if (cache[key]) {
            return cache[key]
        }
        else {
            let val = func.apply(this, arguments);
            cache[key] = val
            return val;
        }
    }
}

const memoizedCountNumbers = memoize(countNumbers)

console.log(`result -->`, countNumbers(0, 3))
console.log(`invocations ->`, {invocations})
globalCount = 0
invocations = 0
console.log(`result -->`, countNumbers(0, 4))
console.log(`invocations ->`, {invocations})
globalCount = 0
invocations = 0
console.log(`result -->`, memoizedCountNumbers(0, 3))
console.log(`memoized invocations ->`, {invocations})
globalCount = 0
invocations = 0
console.log(`result -->`, memoizedCountNumbers(0, 3))
console.log(`memoized invocations ->`, {invocations})
globalCount = 0
invocations = 0
console.log(`result -->`, memoizedCountNumbers(0, 2))
console.log(`memoized invocations ->`, {invocations})
globalCount = 0
invocations = 0
console.log(`result -->`, memoizedCountNumbers(0, 4))
console.log(`memoized invocations ->`, {invocations})
