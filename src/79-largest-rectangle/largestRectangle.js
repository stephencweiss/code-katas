/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if (!heights || !heights.length) return 0
    let stack = [] // tracks _indices_
    let max = 0
    let index = 0
    while (index < heights.length) {
        const current = heights[index]
        const stackPeekVal = heights[stack[stack.length - 1]] // if the stack is empty, stackPeekVal is undefined
        if (stack.length == 0 || stackPeekVal <= current) {
            // increase the index on the way _up_, a consequence of this, however, is that the index is one place ahead
            stack.push(index)
            index += 1
        } else {
            const top = stack.pop()
            const area = calculateArea({ stack, top, heights, index })
            max = Math.max(max, area)
        }
    }
    // for ever increasing heights, we would never get to the else block -- we can do that now
    while (stack.length) {
        const top = stack.pop()
        const area = calculateArea({ stack, top, heights, index })
        max = Math.max(max, area)
    }
    return max
}

/**
 * /**
 * @param {number[]} stack - the indices of the heights in question
 * @param {number} top - the most recently added index to the stack, now popped off
 * @param {number[]} heights - the list of heights that will comprise the area
 * @param {number} index - the current index
 * @return {number} area
 *
 * rationale:
 * since we're decreasing at this point (which is how we got into the else block), we will want to use and discard the
 * latest position.
 *
 * to understand the width, remember that we're tracking indices and not values. as a result, we can calculate the width
 * based on the difference between our current position and the last one still in the stack (remember we just took off
 * the "top"). the extra minus one is because the index is incremented in advance in effect.
 *
 * example: {stack: [1], top: 4, index: 5, heights: [2,1,6,5,4,2]}
 * the stack represents the slice of heights [1,6,5,4]
 *
 * the top (4) means that our max height (or the height we'll use for our calculation) is heights[4] (coincidentally,
 * also with a value of 4).
 *
 * our width is the space between our current index and index represented by the slice (which is tracked as the _last_
 * element in the stack) - or the current index if the stack is empty
 */
function calculateArea({ stack, top, heights, index }) {
    let height = heights[top]
    let width = stack.length ? index - stack[stack.length - 1] - 1 : index
    return height * width
}

// largestRectangleArea([1, 2, 2]) // 4
// largestRectangleArea([1]) // 1
// largestRectangleArea([1,2]) // 2
// largestRectangleArea([4,2,0,3,2,5]) // 6
largestRectangleArea([3,4,2,4,5,1]) // 10
// largestRectangleArea([6,5,4,3,2,1]) // 12
// largestRectangleArea([1,2,3,4,5,6]) // 12

