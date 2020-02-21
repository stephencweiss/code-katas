function plusMinus(arr) {
  // print out ratio of positives;
  // print out ratio of negatives;
  // print out ratio of 0s;

  let countPositive = 0
  let countNegative = 0
  let countZero = 0
  let arrLength = arr.length

  // iterate through the element of the array;
  for (i = 0; i < arrLength; i++) {
    // taking the ith element, is it positive, negative, 0;
    // add the ith element to an appropriate count variable;
    if (arr[i] > 0) {
      countPositive++
    } else if (arr[i] < 0) {
      countNegative++
    } else {
      countZero++
    }
  }
  // return positive ratio
  console.log(countPositive / arrLength)
  // return negative ratio
  console.log(countNegative / arrLength)
  // return 0 ratio
  console.log(countZero / arrLength)
}
