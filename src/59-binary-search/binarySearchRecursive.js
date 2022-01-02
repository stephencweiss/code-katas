/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // look at the midpoint of the list
    // if the target is == the midpoint, return the index
    // if the target is < the midpoint, search again on the left half
    // if the target is > the midpoint, search again on the right half
    // if the midpoint == startInd, return -1

    function bisect(list, target, startInd, endInd) {
        const midInd = Math.floor(startInd + (endInd - startInd) / 2)
        const midVal = list[midInd]
        if (midVal === target) {
            return midInd
        }
        if (endInd - startInd === 1) {
            return bisect(nums, target, endInd, endInd)
        }
        if (startInd === midInd) {
            return -1
        }
        if (midVal < target) {
            return bisect(nums, target, midInd, endInd)
        }
        if (midVal > target) {
            return bisect(nums, target, startInd, midInd)
        }
    }
    return bisect(nums, target, 0, nums.length - 1)
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([2, 5], 5))
console.log(search([2, 5], 9))
