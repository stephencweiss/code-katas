/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {

    if (nums.length < 2) return 0

    let maxSequence = 0

    for(let i = 0; i < nums.length; i++){
        let localCount = nums.slice(i).reduce((track, current) => {
            const base = nums[i]
            if (base - current == 1) return {...track, upSeq: track.upSeq ++}
            if (current - base == 1) return {...track, downSeq: track.downSeq ++}
            return track
        }, {upSeq: 0, downSeq: 0})
        maxSequence = Math.max(maxSequence, localCount.downSeq, localCount.upSeq)
    }
    return maxSequence
}
findLHS([1,2,2,1])
module.exports = { findLHS }