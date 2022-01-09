/**
 * https://leetcode.com/problems/two-sum/submissions/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    for (let idx = 0; idx < nums.length; idx++) {
        const num = nums[idx]
        if (map.has(target - num)) {
            return [map.get(target - num), idx]
        }
        map.set(num, idx)
    }
    return []
}
