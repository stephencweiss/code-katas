/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] == 0) {
            arr.pop()
            arr.splice(++i, 0, 0)
        }
    }
}
let arr1 = [1, 0, 2, 3, 0, 4, 5, 0]
duplicateZeros(arr1)
let arr2 = [1, 2, 3]
duplicateZeros(arr2)
console.log({ arr1, arr2 })
