function largestProduct(arr) {
    let largest = 0;
    let secondLargest = 0;
    let thirdLargest = 0;
    let smallest = 0;
    let secondSmallest = 0;

    if(arr.length < 3) throw new Error(`need at least three numbers`)
    arr.forEach(number => {
        let val = number
        if(val > 0 ){

            if (largest <= val) {
                let temp = largest
                largest = val
                val = temp
            }
            if (secondLargest <= val) {
                let temp = secondLargest
                secondLargest = val
                val = temp
            }
            if (thirdLargest <= val) {
                thirdLargest = val
            }
        } else {
            // handle negative numbers
            if (val <= smallest) {
                let temp = smallest
                smallest = val
                val = temp
            }
            if (val <= secondSmallest) {
                secondSmallest = val
            }
        }
    })

    return Math.max(
        largest * secondLargest * thirdLargest,
        largest * smallest * secondSmallest
    )
}

module.exports = { largestProduct }
