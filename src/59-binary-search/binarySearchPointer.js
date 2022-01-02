/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let startInd = 0
    let endInd = nums.length - 1
    while (startInd < endInd) {
        const midInd = Math.floor(startInd + (endInd - startInd) / 2)
        const curVal = nums[midInd]

        if (curVal === target) return midInd
        if (endInd - startInd === 1) {
            if (nums[endInd] === target) return endInd
            return -1
        }
        if (curVal < target) {
            startInd = midInd
        } else if (target < curVal) {
            endInd = midInd
        }
    }

    return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([2, 5], 5))
console.log(search([2, 5], 9))
