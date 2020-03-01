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

function countNumbers(startNum, numDigits) {
  const cache = {}
  const key = JSON.stringify({ startNum, numDigits })
  if (!cache[key]) {
    cache[key] = findAvailableLPoints(startNum, numDigits - 1, cache)
    console.log(`new cache value ->`, { key, val: cache[key] })
  } else {
    console.log(`found in cache -> `, { key, val: cache[key] })
  }
  return cache[key]
}

function findAvailableLPoints(startNum, numDigits, cache) {
  if (numDigits === 0) {
    return 1
  }

  const lPoints = validEnds[startNum]

  return lPoints.reduce((acc, cur) => {
    const newKey = JSON.stringify({ startNum: cur, numDigits: numDigits - 1 })
    if (!cache[newKey]) {
      cache[newKey] = findAvailableLPoints(cur, numDigits - 1, cache)
      console.log(`new cache value ->`, { key: newKey, val: cache[newKey] })
    }
    {
      console.log(`found in cache -> `, { key: newKey, val: cache[newKey] })
    }
    acc += cache[newKey]
    return acc
  }, 0)
}

console.log(`basic -> `, countNumbers(0, 2))
console.log(`result -->`, countNumbers(0, 3))
console.log(`result -->`, countNumbers(0, 4))
console.log(`result -->`, countNumbers(0, 3))
console.log(`result -->`, countNumbers(0, 3))
console.log(`result -->`, countNumbers(0, 2))
console.log(`result -->`, countNumbers(0, 4))
