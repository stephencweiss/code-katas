/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // Using two pointers, we can start at the beginning and end of the array and compare which goes where
    const result = Array.from(Array(nums.length))
    let left = 0
    let right = nums.length - 1

    for (let i = nums.length - 1; i >= 0; i--) {
        const sqLeft = Math.pow(nums[left], 2)
        const sqRight = Math.pow(nums[right], 2)

        if (sqLeft < sqRight) {
            result[i] = sqRight
            right -= 1
        } else {
            result[i] = sqLeft
            left += 1
        }
    }
    return result
}

console.log(sortedSquares([-4, -1, 0, 3, 10]))

const sortedSquaresSimple = function(nums) {
    return nums
        .map(x => Math.pow(x, 2))
        .sort((a, b) => {
            if (a < b) return -1
            if (b < a) return 1
            return 0
        })
}
