/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    // the local maximum for a position in nums is the max of (num, num + local max of preceding position)
    let localMax = Number.NEGATIVE_INFINITY
    let globalMax = Number.NEGATIVE_INFINITY
    for (let i = 0; i < nums.length; i += 1) {
        const current = nums[i]
        console.log(`pre addition`, { current, localMax, globalMax })
        localMax = Math.max(nums[i], nums[i] + localMax)
        globalMax = Math.max(localMax, globalMax)
        console.log(`post addition`, { current, localMax, globalMax })
    }
    return globalMax
}

const maxSubArrayWithTabulation = function(nums) {
    const subArraySums = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        const cur = nums[i]
        subArraySums[i] = Math.max(subArraySums[i - 1] + cur, cur)
    }
    return subArraySums.reduce((acc, cur) => Math.max(acc, cur))
}

console.log(`maxSub:`, maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(
    `maxSubTab:`,
    maxSubArrayWithTabulation([-2, 1, -3, 4, -1, 2, 1, -5, 4])
)

//
function findSumOfArray(arr) {
    if (arr.length == 0) throw new Error('Array must have at least one element')
    if (arr.length == 1) return arr[0]
    return findSumOfArray(arr.slice(0, arr.length - 1)) + arr[arr.length - 1]
}

const findSumArrayAlt = arr => arr.reduce((acc, cur) => acc + cur)

let arr = [1, 2, 4, 8]
console.log(findSumOfArray(arr))
console.log(findSumArrayAlt(arr))



/**
 * How to understand this:
 * The maximum sum of an array, A, of length n is:
 *   The maximum sum of an array of length n-1 + A[n] ... or A[n] if A[n] > the sum.
 *   A[n] > sum of array of n-1 + A[n] when the sum of sum of the array of length n-1 is < 0.
 *
 * With this understanding, we can step forward, one step at a time to _find_ the sums of the subarrays
 * The benefit of stepping forward means that we always know the local max and don't need to calculate it each time.
 */