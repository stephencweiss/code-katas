function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor
}

function inplaceShuffle(arr) {
    let currentIndex = 0
    while (currentIndex < arr.length - 1) {
        let swapIndex = getRandom(currentIndex, arr.length - 1)
        if (currentIndex !== swapIndex) {
            let temp = arr[currentIndex]
            arr[currentIndex] = arr[swapIndex]
            arr[swapIndex] = temp
        }
        currentIndex++
    }
    return arr
}

console.log(inplaceShuffle([1, 2, 3, 4, 5]))
