const list = [2, 1, 6, 5, 2, 3, 4]

function largestRectangleArea(list) {
    if(!list.length) return 0
    const windows = createMonotonicWindows(list)
    let globalMax = 0
    let globalMin = Math.min(...list)
    globalMax = Math.max(globalMax, globalMin * list.length)
    windows.forEach(
        window =>
            {
                globalMax = Math.max(globalMax, findLocalMax({ window, list }))
            }
    )
    return globalMax
}

function findLocalMax({ window, list }) {
    let localMax = 0
    if(list[window[0]] < list[window[window.length - 1]]) {
        // incrementing windows
        let index = window[0]
        const end = window[window.length - 1]
        while(index <= end){
            const height = list[index]
            const width = !!(end - index) ? end - index + 1 : 1
            localMax = Math.max(localMax, width * height)
            index += 1
        }
    }
    else {
        // decreasing windows
        while (window.length > 0) {
            let top = window.pop()
            const height = list[top]
            const width = window.length + 1
            localMax = Math.max(localMax, width * height)
        }
    }
    return localMax
}
function calculateArea({ stack, top, heights, index }) {
    let height = heights[top]
    let width = stack.length ? index - stack[stack.length - 1] - 1 : index
    return height * width
}

function createMonotonicWindows(list) {
    const res = []
    let current = []
    let index = 0

    while (index < list.length) {
        current.push(index)
        if (current.length > 0 && changeDirection(index, list)) {
            res.push(current)
            current = [current[current.length - 1]]
        }

        index += 1
    }
    current.length > 0 && res.push(current)
    return res
}

function changeDirection(currentIndex, list) {
    const previous = list[currentIndex - 1]
    const next = list[currentIndex + 1]
    const current = list[currentIndex]
    if (isNaN(previous) || isNaN(next)) return false
    return (
        current < Math.min(previous, next) || current > Math.max(previous, next)
    )
}

console.log(largestRectangleArea([4,2,0,3,2,5]))

// ```title:histogram.txt
//           x
//         x x
//       x x x
//     x x x x
//   x x x x x
// x x x x x x
// -----------
// 1 2 3 4 5 6  - height
// 0 1 2 3 4 5  - position
// ``````title:histogram.txt
// x
// x x
// x x x
// x x x x
// x x x x x
// x x x x x x
// -----------
// 6 5 4 3 2 1 - height
// 0 1 2 3 4 5 - position
// ``````title:histogram.txt
//           x
//         x x
// x       x x
// x x     x x
// x x x   x x
// x x x x x x
// -----------
// 4 3 2 1 5 6 - height
// 0 1 2 3 4 5 - position
// ``````title:histogram.txt
//         |     x
//         |   x x
// x       |   x x
// x x     |   x x
// x x x   |   x x
// x x x x | x x x
// --------| -----
// 4 3 2 1 | 1 5 6 - height
// 0 1 2 3 | 3 4 5 - position
// ```
