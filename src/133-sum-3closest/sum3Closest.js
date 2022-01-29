/**
 * https://leetcode.com/problems/3sum-closest/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let diff = Number.MAX_SAFE_INTEGER
    let sign = 'ADD'
    nums.sort(sortDesc)
    for (let i = 0; i < nums.length - 1; i++) {
        let j = i + 1 // start with the next number
        let k = nums.length - 1 // start with the last number

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k]
            if (sum == target) return sum
            const newDiff = Math.abs(target - sum)
            if (newDiff < Math.abs(diff)) {
                diff = newDiff
                sign = sum > target ? 'ADD' : 'SUBTRACT'
            }

            // if what
            if (sum < target) {
                j++
            } else {
                k--
            }
        }
    }
    return sign === 'ADD' ? target + diff : target - diff
}

const sortDesc = (a, b) => {
    if (a < b) return -1
    if (b < a) return 1
    return 0
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))
console.log(threeSumClosest([-1, 2, 1, -4], 2))
console.log(threeSumClosest([-1, 2, 1, -4], 3))
