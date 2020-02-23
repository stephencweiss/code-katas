function compareTheTriplets(arrayA, arrayB) {
  debugger
  let outcomeArray = [0, 0]
  // check to ensure both arrays are the same length
  if (arrayA.length !== arrayB.length) {
    return console.log(
      'Arrays are of different length; please correct and try again!'
    )
  } else {
    // elicit the same item from both arrays so that we can compare
    for (let i = 0; i < arrayA.length; i++) {
      // compare that item
      // increment the winning array by 1 if larger, no change if the same
      if (arrayA[i] > arrayB[i]) {
        outcomeArray[0]++
      } else if (arrayA[i] < arrayB[i]) {
        outcomeArray[1]++
      }
    }
    return outcomeArray
  }
}

//Tests
let alice = [1, 2, 3]
let bob = [3, 2, 1]
compareTheTriplets(alice, bob)
//> outcomeArray = [1,1]
