/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const completeSet = []
    let indexOne = 0
    let indexTwo = 0
    // create new array by placing smaller value into array and incrementing
    while (indexOne < nums1.length && indexTwo < nums2.length) {
        valOne = nums1[indexOne]
        valTwo = nums2[indexTwo]
        if (valOne < valTwo) {
            completeSet.push(valOne)
            indexOne += 1
        } else {
            completeSet.push(valTwo)
            indexTwo += 1
        }
    }

    // append any remaining values
    // this catches what might be left over
    for (; indexOne < nums1.length; indexOne += 1) {
        completeSet.push(nums1[indexOne])
    }
    for (; indexTwo < nums2.length; indexTwo += 1) {
        completeSet.push(nums2[indexTwo])
    }

    // find median directly (if len is odd, it's the middle value, if it's even, it's 1/2 between the two "middle" values)
    if (completeSet.length % 2 == 0) {
        let lowerNum = completeSet[completeSet.length / 2 - 1]
        let higherNum = completeSet[completeSet.length / 2]
        return (lowerNum + higherNum) / 2
    }
    return completeSet[Math.floor(completeSet.length / 2)]
}
