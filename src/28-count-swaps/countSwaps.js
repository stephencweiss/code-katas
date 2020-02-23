/**
 *
 * @arg {Array} a - An array of integers
 * @returns {Array} - A sorted array, prints the number of swaps needed to achieve the outcome
 */
function countSwaps(a) {
  debugger
  let numSwaps = 0
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        swap(j, j + 1, a)
        numSwaps += 1
      }
    }
  }
  console.log(`Array is sorted in ${numSwaps} swaps.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a[a.length - 1]}`)
  return a
}

function swap(elA, elB, arr) {
  const temp = arr[elA]
  arr[elA] = arr[elB]
  arr[elB] = temp
  return arr
}

countSwaps([3, 2, 1])
