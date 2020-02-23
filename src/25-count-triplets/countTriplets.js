/**
 *
 * @arg {Array} arr - An array of integers to evaluate, sorted
 * @arg {number} r - The common ratio by which to evaluate
 * @return {integer} The number of triplets that match a geometric sequence with a common ratio present within the array
 * @example countTriplets([1,4,16,64], 4) // returns 2
 * @example countTriplets([1,4,16,64], 3) // returns 0
 * @example countTriplets([1,5,5,25,125], 5) // returns 4 from the indices [(0,1,3), (0,2,3), (1,3,4), (2,3,4)]
 * @example countTriplets([1,5,25,125,125], 5) // returns 3 from the indices [(0,1,2), (1,2,3), (1,2,4)]
 * @example countTriplets([1,5,5,25,25,125], 5) // returns 8
 */
function countTriplets(arr, r) {
  let tripletCount = 0
  const secondEl = {} // store the expected *second* element in the triplet
  const thirdEl = {} // store the expected *third* element in the triplet

  arr.forEach(val => {
    // if the value is present in the third, increment count
    if (thirdEl[val]) {
      tripletCount += thirdEl[val]
    }

    // if the value is present in the object tracking seconds,
    // add/increment the appropriate value in the object tracking thirds
    if (secondEl[val]) {
      thirdEl[val * r] = thirdEl[val * r] + secondEl[val] || secondEl[val]
    }

    // based on the current value,
    // add/increment the value in the object tracking seconds
    secondEl[val * r] = secondEl[val * r] + 1 || 1
  })
  return tripletCount
}

// console.log(countTriplets([1,4,16,64], 4))
// console.log(countTriplets([1,5,5,25,25,125], 5))
// console.log(countTriplets([1,5,5,25,125], 5))

/**
 *
 * @arg {Array} arr - An array of integers to evaluate, sorted
 * @arg {number} r - The common ratio by which to evaluate
 * @return {integer} The number of triplets that match a geometric sequence with a common ratio present within the array
 * @example countTriplets([1,4,16,64], 4) // returns 2
 * @example countTriplets([1,4,16,64], 3) // returns 0
 * @example countTriplets([1,5,5,25,125], 5) // returns 4 from the indices [(0,1,3), (0,2,3), (1,3,4), (2,3,4)]
 * @example countTriplets([1,5,25,125,125], 5) // returns 3 from the indices [(0,1,2), (1,2,3), (1,2,4)]
 * @example countTriplets([1,5,5,25,25,125], 5) // returns 8
 */
function countTriplets(arr, r) {
  debugger
  let tripletCount = 0
  const secondEl = {} // store the expected *second* element in the triplet
  const thirdEl = {} // store the expected *third* element in the triplet

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i]
    // if the value is present in the third, increment count
    if (thirdEl[val]) {
      tripletCount += thirdEl[val]
    }

    // if the value is present in the object tracking seconds,
    // add/increment the appropriate value in the object tracking thirds
    if (secondEl[val]) {
      thirdEl[val * r] = thirdEl[val * r] + secondEl[val] || secondEl[val]
    }

    // based on the current value,
    // add/increment the value in the object tracking seconds
    secondEl[val * r] = secondEl[val * r] + 1 || 1
  }
  return tripletCount
}
