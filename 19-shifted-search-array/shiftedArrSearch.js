/**
 *
 * @args {Array} shiftArr - The sorted array that has been shifted
 * @args {number} num - The number that is being searched for
 * @returns {number} The index at which the num is found, -1 if not present
 * @example shiftedArrSearch([4,5,6,19,1,3], 2) // returns -1
 * @example shiftedArrSearch([4,5,6,19,1,3], 5) // returns 1
 * @example shiftedArrSearch([4,5,6,19,1,3], 3) // returns 5
 * @example shiftedArrSearch([4,5,6,7,8,9,19,1,3], 7) // returns 3
 * @example shiftedArrSearch([2,1],1) // returns 1
 * @example shfitedArrSearch([2,1],3) // returns -1
 */
function shiftedArrSearch(shiftedArr, num, leftInd, rightInd){

  leftInd = leftInd ? leftInd : 0
  rightInd = rightInd ? rightInd : shiftedArr.length - 1
  const midInd = Math.floor((leftInd + rightInd) / 2);
  const midVal = shiftedArr[midInd];
  const leftVal = shiftedArr[leftInd];
  const rightVal = shiftedArr[rightInd];

  if (num === midVal) {
    console.log(`Case 0: Winning`)
    return midInd
  }
  else if (rightInd - leftInd === 0) {
    console.log(`Case 1: Losing`)
    const result = -1
    return result;
  }
  else if (rightInd - leftInd === 1) {
    console.log(`Case 2: Down to two -->`, leftInd, rightInd)
    leftInd = rightInd;
    return shiftedArrSearch(shiftedArr, num, leftInd, rightInd)
  }
  else if (num > midVal) {
    if (num > rightVal) {
      console.log(`Case 3: Search Left`)
      rightInd = midInd;
    }
    else if (num <= rightVal) {
      console.log(`Case 4: Search Right`);
      leftInd = midInd;
    }
    return shiftedArrSearch(shiftedArr, num, leftInd, rightInd)
  }
  else if (num < midVal) {
    if (num < leftVal) {
      console.log(`Case 5: Search Right`)
      leftInd = midInd;
    }
    else if (num >= leftVal) {
      console.log(`Case 6: Search Left`);
      rightInd = midInd;
    }
    return shiftedArrSearch(shiftedArr, num, leftInd, rightInd)
  }
}

// console.log(shiftedArrSearch([4,5,6,19,1,3], 2)) // returns -1
// console.log(shiftedArrSearch([4,5,6,19,1,3], 5)) // returns 1
// console.log(shiftedArrSearch([4,5,6,19,1,3], 3)) // returns 5
// console.log(shiftedArrSearch([4,5,6,7,8,9,19,1,3], 7)) // returns 3
console.log(shiftedArrSearch([2,1],1)) // returns 1
console.log(shiftedArrSearch([2,1],3)) // returns -1