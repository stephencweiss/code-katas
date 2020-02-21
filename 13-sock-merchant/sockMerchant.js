/**
 * @arg {Number} n - The number of socks
 * @arg {Array} ar - The array of sock colors
 * @returns {Number} Returns the integer value of the number of matched sock pairs
 * @example <caption>Example usage of method1.</caption>
 * sockMerchant(5, [1,2,1,2,1])
 * // returns 2
 */
const sockMerchant = (n, ar) => {
  // take array and sort it
  ar.sort() // could add a custom sorting function, but no need
  // [1,1,1,2,2]
  let pairs = 0
  let index = 0
  while (index < n - 1) {
    let curEl = ar[index],
      nextEl = ar[index + 1]
    if (curEl === nextEl) {
      // increment pair
      pairs += 1
      // jump two spots (increment index by two)
      index += 2
    }
    // move to next spot (increment index by one)
    else index += 1
  }
  return pairs
}
sockmercha
