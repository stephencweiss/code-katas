/**
 * The binary search algorithm will divide the array in half, recursively, to determine if the target is present
 * @param {array} sortedArray
 * @param {value} target
 * @return {boolean} -- a boolean value of whether the target is present
 */
function binarySearch(sortedArray, target) {
    // findhalfway point
    let midpoint = Math.floor(sortedArray.length / 2)
    let arr = sortedArray
    // create an array we'll continually evaluate
    while (arr.length >= 1) {
        if (arr[midpoint] === target) {
            return true
        }
        if (arr.length === 1) {
            return false
        } else if (target < arr[midpoint]) {
            arr = arr.slice(0, midpoint)
            midpoint = Math.floor(arr.length / 2)
        } else {
            arr = arr.slice(midpoint)
            midpoint = Math.floor(arr.length / 2)
        }
    }
    return false
}

function binarySearchRecursive(sortedArray, target) {
    let midpoint = Math.floor(sortedArray.length / 2)
    if (sortedArray[midpoint] === target) {
        return true
    }
    if (sortedArray.length === 1) {
        return false
    }
    if (target < sortedArray[midpoint]) {
        return binarySearchRecursive(sortedArray.slice(0, midpoint), target)
    } else {
        return binarySearchRecursive( sortedArray.slice(midpoint), target)
    }
}
