/**
 *
 * @param {number[]} A
 * @returns {number} Perimeter of the largest triangle
 */
var largestPerimeter = function (A) {
    let maxPerimeter = 0
    if (A.length < 3) return maxPerimeter

    const sides = A.sort(sorter)
    // for each combination of three sides
    for (let s1 = 0; s1 < sides.length - 2; s1 += 1) {
        for (let s2 = s1 + 1; s2 < sides.length - 1; s2 += 1) {
            for (let s3 = s2 + 1; s3 < sides.length; s3 += 1) {
                const side1 = sides[s1]
                const side2 = sides[s2]
                const side3 = sides[s3]
                if (nonZeroAreaTriangle(side1, side2, side3)) {
                    maxPerimeter = Math.max(maxPerimeter, side1 + side2 + side3)
                }
            }
        }
    }
    return maxPerimeter
}

function sorter(a, b) {
    return a < b ? -1 : 1
}

/**
 * Assumes all sides are non-negative
 * @param {number[]} sides
 * @returns boolean
 */
function nonZeroAreaTriangle(side1, side2, side3) {
    return side1 + side2 > side3
}

A1 = largestPerimeter([1, 2, 2, 4, 18, 8])
A2 = largestPerimeter([3, 1, 1])
A3 = largestPerimeter([3, 6, 2, 3])

console.log({ A1, A2, A3 })
