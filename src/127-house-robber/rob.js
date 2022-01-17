/**
 * https://leetcode.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    /*
    this actually works better if instead of being _forward_ looking, you're backwards looking

    given a house
    how can i maximize the amount i get from it?
    i look at what i could have gotten from the previous two houses
    */

    if (nums.length == 0) return 0
    let maxTwoBefore = nums[0]
    if (nums.length == 1) return maxTwoBefore
    let maxOneBefore = Math.max(maxTwoBefore, nums[1])
    if (nums.length == 2) return maxOneBefore

    let max = maxOneBefore

    for (let i = 2; i < nums.length; i++) {
        max = Math.max(nums[i] + maxTwoBefore, maxOneBefore)
        maxTwoBefore = maxOneBefore
        maxOneBefore = max
    }

    return max
}
