/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length <= 1) return

    // two pointers
    let left = 0
    let right = 1
    while (left < nums.length) {
        if (nums[left] === 0) {
            right = left + 1
            while (nums[right] === 0 && right < nums.length) {
                right++
            }
            if (right < nums.length) {
                let temp = nums[right]
                nums[right] = nums[left]
                nums[left] = temp
            }
        }
        left++
    }
}

var moveZeroesAlt = function(nums) {
    //two pointers
    var pos = 0

    // replace the index with the next non-zero (even if it is itself)
    // on each replacement, increment the position, our second pointer
    // the result is that on non-zeroes, the two pointers move in unison,
    // but on zeroes, the i pointer increments and the position pointer does not.
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos++] = nums[i]
        }
    }

    // starting at the position of the total number of replacements
    // make a final loop and mark them all as zero
    for (i = pos; i < nums.length; i++) {
        nums[i] = 0
    }
}

// let nums = [0, 1, 0, 3, 12]
let nums = [4, 1, 0, 3, 12]
let nums2 = [0]
moveZeroesAlt(nums)
moveZeroes(nums2)
console.log({ nums, nums2 })
