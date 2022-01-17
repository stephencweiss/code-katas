/**
 * https://leetcode.com/problems/merge-sorted-array/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let pos = nums1.length - 1
    let lPos = m - 1
    let rPos = n - 1
    console.log({ nums1, m, nums2, n, pos })
    while (lPos >= 0 && rPos >= 0) {
        const left = nums1[lPos]
        const right = nums2[rPos]
        if (left < right) {
            nums1[pos] = nums2[rPos--]
        } else {
            nums1[pos] = nums1[lPos]
            nums1[lPos] = 0
            lPos--
        }
        pos--
    }
    while (rPos >= 0) {
        nums1[pos] = nums2[rPos--]
        pos--
    }
    console.log({ nums1, m, nums2, n, pos })
}

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)
// merge([0], 0, [1], 1)
