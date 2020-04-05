function findADuplicate(arr) {
    let start = 0
    let end = arr.length - 1
    // set a start and end
    while (start < end) {
        // find the midpoint of the slice (floor between start and the end-start / 2)
        const midpoint = Math.floor(start + (end - start) / 2)
        const midpointVal = arr[midpoint]
        const leftVal = arr[midpoint - 1]
        const rightVal = arr[midpoint + 1]
        // check if the midpoint is a duplicate (look left and right)
        if (midpointVal === leftVal || midpointVal === rightVal) {
            return midpointVal
        }
        if(end - start === 1){
            throw new Error(`No Duplicate!`)
        }
        if (midpointVal <= midpoint) {
            end = midpoint
        } else {
            start = midpoint
        }
    }
}

module.exports = { findADuplicate }

const arr = [1,2,2,3,4,5,6,7,8,9]
findADuplicate(arr)