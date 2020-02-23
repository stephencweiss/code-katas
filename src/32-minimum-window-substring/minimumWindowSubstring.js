/**
 * {Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"}
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const stringArray = s.split('')
  let startingInd = 0
  let endingInd = t.length
  let minWindowLength = Infinity
  let minWindowString = ''
  let windowCounter = resetWindowCounter(t)

  for (
    startingInd;
    startingInd < stringArray.length - t.length;
    startingInd += 1
  ) {
      let window = createWindow(stringArray, startingInd, endingInd)

      window.map(el => {
          if(windowCounter[el] !== undefined){
              return windowCounter[el] += 1}
      })
      while (window.length < minWindowLength) {

      if (assessWindow(windowCounter)) {
        minWindowString = window.join('')
        minWindowLength = window.length
        windowCounter = resetWindowCounter(t)
        endingInd = t.length
      } else {
        endingInd += 1
        window = createWindow(stringArray, startingInd, endingInd)
        let newChar = window[window.length -1]
        if(windowCounter[newChar] !== undefined) {
            windowCounter[newChar] += 1;
        }
      }
    }
  }

  return minWindowString

  // early abort, we don't need to go all the way to the end because we need at least t characters
}

function resetWindowCounter(targetT) {
   return targetT.split('').reduce((acc, cur) => {
    acc[cur] = 0
    return acc
  }, {})
}

function createWindow(stringArray, startingInd, endingInd) {
  return stringArray.slice(startingInd, endingInd)
}

/**
 * @param {object} currentWindow
 * @return {boolean} - whether all of the target characters are included
 */
function assessWindow(windowCount) {
  return !Object.values(windowCount).some(el => el === 0)
}

minWindow('ADOBECODEBANC', 'ABC')
