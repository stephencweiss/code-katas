/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // the local maximum for a position in nums is the max of (num, num + local max of preceding position)
    let localMax = Number.NEGATIVE_INFINITY
    let globalMax = Number.NEGATIVE_INFINITY
    for (let i = 0; i < nums.length; i+=1){
        console.log(`pre addition of ${nums[i]}, ${localMax}`)
        localMax = Math.max(nums[i], nums[i]+localMax)
        console.log(`post addition of ${nums[i]}, ${localMax}`)
        globalMax = Math.max(localMax, globalMax)
    }
    return globalMax
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])



function findSumOfArray(arr){
    if(arr.length == 0) throw new Error('Array must have at least one element')
    if(arr.length == 1) return arr[0]
    return findSumOfArray(arr.slice(0, arr.length - 1)) + arr[arr.length - 1]
}

let arr = [1,2,4,8]
console.log(findSumOfArray(arr))




/**
 * How to understand this:
 * The maximum sum of an array, A, of length n is:
 *   The maximum sum of an array of length n-1 + A[n] ... or A[n] if A[n] > the sum.
 *   A[n] > sum of array of n-1 + A[n] when the sum of sum of the array of length n-1 is < 0.
 *
 * With this understanding, we can step forward, one step at a time to _find_ the sums of the subarrays
 * The benefit of stepping forward means that we always know the local max and don't need to calculate it each time.
 */