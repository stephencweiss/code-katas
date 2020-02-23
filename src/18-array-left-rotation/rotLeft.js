/**
 * Left Rotation
 * @args {Array} a - An array of integers
 * @args {number} d - The number of left-shift rotations to perform
 * @returns {string} Space separated integers
 * @example <caption> Examples of rotLeft </caption>
 * rotLeft([1,2,3,4], 6) // returns [3,4,1,2]
 * rotLeft([1,2,3,4], 3) // returns [4,1,2,3]
 */
function rotLeft(a, d) {
  //calculate effective rotation (d % a.length)
  let effectiveRotation = d % a.length

  // split a at index of effective rotation into left and right
  let leftPortion = a.slice(0, effectiveRotation)
  let rightPortion = a.slice(effectiveRotation)
  // concat left to right (ie. [right, left])
  return rightPortion.concat(leftPortion)
}
