/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxVal = 0

    for (let i = 0; i < heights.length; i += 1) {
        for (let j = i; j < heights.length; j += 1) {
            const width = j - i + 1
            const minHeight = Math.min(...heights.slice(i, j + 1))
            maxVal = Math.max(width * minHeight, maxVal)
        }
    }
    return maxVal
}

largestRectangleArea([2, 1, 5, 6, 2, 3])
