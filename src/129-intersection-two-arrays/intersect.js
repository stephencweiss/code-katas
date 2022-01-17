/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const l1Appearances = new Map() // value: appearances
    const l2Appearances = new Map() // value: appearances

    // appearances in list 1
    // appearances in list 2
    // overlap = shared numbers and minimum length

    nums1.forEach(num => {
        if (l1Appearances.has(num)) {
            l1Appearances.set(num, l1Appearances.get(num) + 1)
        } else {
            l1Appearances.set(num, 1)
        }
    })

    nums2.forEach(num => {
        if (l2Appearances.has(num)) {
            l2Appearances.set(num, l2Appearances.get(num) + 1)
        } else {
            l2Appearances.set(num, 1)
        }
    })

    const res = []
    l1Appearances.forEach((val, key) => {
        if (l2Appearances.has(key)) {
            const minAppearances = Math.min(l2Appearances.get(key), val)
            res.push(...Array(minAppearances).fill(key))
        }
    })

    return res
}

console.log(intersect([1, 2, 2, 1], [2, 2]))
