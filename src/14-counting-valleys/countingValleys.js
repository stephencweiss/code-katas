/**
 *
 * @args {Number} n - The number of steps Gary takes on a hike
 * @args {String} s - The steps Gary took, D = down, U = up
 * @returns {Number} The number of valleys through which Gary hiked
 * @example countingValleys(8, 'UDDDUDUU') // returns 1
 */
// (Faster) Approach
const countingValleys = (n, s) => {
  const steps = s.split('')
  let valleyCount = 0,
    curEl = 0

  for (let i = 0; i < steps.length; i += 1) {
    const step = steps[i]
    if (step === 'U') {
      curEl += 1
      if (curEl === 0) {
        valleyCount += 1
      }
    } else {
      curEl -= 1
    }
  }
  return valleyCount
}

// Alternative (slower) approach
const countingValleysSlow = (n, s) => {
  let curElevation = 0,
    curType = '',
    curIndex = 0,
    valleyCount = 0
  while (curIndex < n) {
    // evaluate if we’re in a valley, on a mountain, or finishing either

    if (curElevation < 0) {
      curType = 'Valley'
    } else if (curElevation > 0) {
      curType = 'Mountain'
    } else {
      if (curType === 'Valley') {
        valleyCount += 1
      }
      curType = ''
    }
    console.log(`The current Type is → `, curType)
    console.log(`The currentCount is →`, valleyCount)

    // set our curStep = to the current position of the string
    const curStep = s[curIndex]
    console.log(`The current Step is -->`, curStep)
    // adjust current position based on the currentStep value
    if ((curStep = 'D')) {
      curElevation -= 1
    } else {
      curElevation += 1
    }
    console.log(`current elevation is → `, curElevation)

    curIndex += 1
  }
  return valleyCount
}
