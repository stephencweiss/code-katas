/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // simple way
    // create a new array of nums.length
    // for each element in nums
    // place into the index associated with i + k, if i+k > nums.length-1 - just take the difference
    // e.g., length = 10, i = 8 and k = 4, then 8+4>9, 12-9 =3 -> it would go into position 3, index 2 ?? need to test this math

    const indexCount = nums.length
    const result = Array(indexCount)

    nums.forEach((num, index) => {
        if (index + k < indexCount) {
            result[index + k] = num
        } else {
            const newIndex = index + k - indexCount
            result[newIndex] = num
        }
    })

    return (nums = result)
}

const rotate2 = function(nums, k) {
    // one pass - add the rotated positions to new space in the array - go right to left
    // second pass - for the number of spots rotated, count down and pop off the extra pieces added

    for (let i = nums.length - 1; i >= 0; i--) {
        nums[i + k] = nums[i]
    }
    for (let j = k - 1; j >= 0; j--) {
        nums[j] = nums.pop()
    }
    return nums
}

rotate2([1, 2, 3, 4, 5, 6, 7], 3)
