/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1

    while (start < end) {
        const mid = Math.floor(start + (end - start) / 2)
        const check = nums[mid]
        if (target === check) {
            return mid
        }
        if (end - start >= 1) {
            if (target > nums[end]) return end + 1
            else if (target > nums[start]) return end
            else return start
        }
        if (target < check) {
            end = mid
        } else {
            start = mid
        }
    }

    if (target > nums[start]) {
        return start + 1
    } else {
        return start
    }
}

// console.log(searchInsert([1, 3, 5, 6], 2))
// console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1], 0))
console.log(searchInsert([1], 2))
