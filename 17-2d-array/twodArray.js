/**
*
* @args {Array} arr - A two-dimensional array of integers
* @returns {number} The maximum sum of an hourglass within the array - an hourglass is defined as three consecutive elements in a row, three consecutive elements two rows directly beneath and the middle element in the middle row
* @example hourglassSum([
[1,1,1,0,0,0],
[0,1,0,0,0,0],
[1,1,1,0,0,0],
[0,0,2,4,4,0],
[0,0,0,2,0,0],
[0,0,1,2,4,0]
]) // returns 19
*/
function hourglassSum(arr) {

  // set a default maxHourglassSum to Neg. infinity
  let maxHourglassSum = Number.NEGATIVE_INFINITY;
  let curRow = 0, curCol = 0;
  const maxRow = arr.length, maxCol = arr[0].length;

  // while row is < max row - 2
  while (curRow < maxRow - 2) {
    const curHourglassSum =
  arr[curRow][curCol] + arr[curRow][curCol+1] + arr[curRow][curCol+2] +
      arr[curRow + 1][curCol + 1] +
  arr[curRow+2][curCol]+arr[curRow+2][curCol+1]+arr[curRow+2][curCol+2]
    maxHourglassSum = curHourglassSum > maxHourglassSum ? curHourglassSum : maxHourglassSum;
   if ( curCol < maxCol ) { curCol += 1 } // add one to the col
   else if ( curCol = maxCol ) { curCol = 0; curRow += 1;}  // add one to row and set curCol = 0;
   else {
     console.log(`something’s wrong - infinite loop if not escaped here`)
     return;
   }
  }
  return maxHourglassSum

}