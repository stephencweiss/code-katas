/**
 *
 * @param {*} arr
 * @returns {number} -- the index (of the original array) where the midpoint is
 */
function findPivotPoint(arr) {
    let floorIndex = 0
    let ceilingIndex = arr.length - 1

    while (floorIndex < ceilingIndex) {
        const floorVal = arr[floorIndex]

        // guess a midpoint
        const midPointIndex = Math.floor(floorIndex + (ceilingIndex - floorIndex) / 2)
        const midVal = arr[midPointIndex]
        if ((  midVal <= floorVal )) {
            ceilingIndex = midPointIndex
        } else {
            floorIndex = midPointIndex
        }
        if (ceilingIndex - floorIndex === 1) {
            if(floorVal < arr[ceilingIndex]) return 0;
            break
        }
    }
    return ceilingIndex
}

module.exports = { findPivotPoint }