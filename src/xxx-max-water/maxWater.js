var maxArea = function(height) {
    let leftIndex = 0
    let rightIndex = height.length - 1

    let maxVal = calculateVolume(
        leftIndex,
        rightIndex,
        height
    )

    let minLeft = height[0]
    let minRight = height[height.length -1]
    while (leftIndex < rightIndex) {
        let curLeft = height[leftIndex]
        let curRight = height[rightIndex]
        if (curLeft > minLeft || curRight > minRight) {
            minLeft = Math.max(minLeft, curLeft)
            minRight = Math.max(minRight, curRight)

            maxVal = Math.max(
                maxVal,
                calculateVolume(leftIndex, rightIndex, height)
            )
        }

        /**
         * current 5,17
         * next 18
         */

        /**
         * we want to lift the bottom, so pick the next one that will lift the overall average
         */
        const nextLeft = leftIndex + 1
        const nextRight = rightIndex - 1
        if (height[nextLeft] < height[nextRight] || height[nextLeft] == height[nextLeft] && height[leftIndex] < height[rightIndex]){
            leftIndex = nextLeft
        }

        else {
            rightIndex = nextRight
        }
    }
    return maxVal
}

function calculateVolume( start, end, height) {
    return Math.min(height[start],height[end]) * (end - start)
}
maxArea([5, 2, 12, 1, 5, 3, 4, 11, 9, 4])