/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if(!nums.length) return []
    let results = []
    let window = nums.slice(0,k)
    results.push(Math.max(...window))
    for (let i = k; i < nums.length; i += 1){
        window.shift()
        window.push(nums[i])
        results.push(Math.max(...window))
    }
    return results
};
