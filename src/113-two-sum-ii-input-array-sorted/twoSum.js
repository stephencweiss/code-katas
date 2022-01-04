/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // for(let start = 0, end = numbers.length-1; start < end;){
    for (let start = 0, end = numbers.length - 1; start < end; ) {
        const sum = numbers[start] + numbers[end]
        if (sum === target) return [start + 1, end + 1]
        else sum > target ? end-- : start++
    }
}
