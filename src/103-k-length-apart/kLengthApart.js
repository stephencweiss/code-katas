function kLengthApart(nums, k) {
    let curIndex = 0
    let previousI
    while (nums[curIndex] !== undefined) {
        if (nums[curIndex] == 0) {
            curIndex++
        } else if (previousI !== undefined && k >= curIndex - previousI) {
            return false
        } else {
            previousI = curIndex
        }
    }
    return true
}

function kLengthApart2(nums, k) {
    let dist = k
    for (let i = 0; i < nums.length; i++) {
        // if it's 0, we can just proceed to the next value after incrementing our distance count
        if (nums[i] == 0) {
            dist++
            // now, we know it's one, so does it meet our condition?
        } else if (k > dist) {
            return false
            // passed the condition, so reset the count
        } else {
            dist = 0
        }
    }
}
