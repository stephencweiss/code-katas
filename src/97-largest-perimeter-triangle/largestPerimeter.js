/**
 * Intuition is that by sorting in a descending order,
 * we can find the largest triangles _first_.
 * The first triangle that is valid will by definition
 * have the largest perimeter - allowing for an early
 * return.
 * @param {number[]} A
 * @returns {number} Perimeter of the largest triangle
 */
var largestPerimeter = function (A) {
    if (A.length < 3) return 0

    const sides = A.sort(sortDescending)

    for (let i = 0; i < sides.length - 2; i += 1) {
        const triangle = [sides[i], sides[i + 1], sides[i + 2]]
        if (nonZeroAreaTriangle(triangle)) {
            return triangle.reduce((acc, cur) => acc + cur)
        }
    }
    return 0
}

function sortDescending(a, b) {
    return a > b ? -1 : 1
}

/**
 * Assumes all sides are non-negative
 * @param {number[]} sides
 * @returns boolean
 */
function nonZeroAreaTriangle(sides) {
    const [side1, side2, side3] = sides
    return side1 < side2 + side3
}

A1 = largestPerimeter([1, 2, 2, 4, 18, 8])
A2 = largestPerimeter([3, 1, 1])
A3 = largestPerimeter([3, 6, 2, 3])

console.log({ A1, A2, A3 })
