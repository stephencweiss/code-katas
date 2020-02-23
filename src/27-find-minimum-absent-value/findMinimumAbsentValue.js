/**
 *
 * @arg {Array} A - An array of N integers
 * @returns {number} The smallest positive integer NOT present in A
 * @example solution([-12,1,2,3,5,6]) // 4
 * @example solution([2,3,4,5,6]) // 1
 * @example solution([-12,-1,0]) // 1
 * Assumptions
 * N is in the range [1, 100,000]
 * Each element of A is in the range [-1000000, 1000000]
 */
function findMinimumPositiveNotPresent(A) {
  let minPos = 1 // The smallest possible number
  let filteredA = A.filter(el => el > 0)
  if (filteredA.length === 0) {
    return minPos
  }

  const setA = new Set([...filteredA])
  console.log(setA)
  for (let i = 0; i < setA.size; i += 1) {
    if (setA.has(minPos)) {
      minPos += 1
    } else {
      return minPos
    }
  }
}
