function mergeSortedArrays(arrayA, arrayB) {
    let indexA = 0
    let indexB = 0
    let mergeSorted = []
    while (mergeSorted.length < arrayA.length + arrayB.length) {
        const aIsExhausted = indexA >= arrayA.length
        const bIsExhausted = indexB >= arrayB.length
        if (!aIsExhausted && (bIsExhausted || arrayA[indexA] <= arrayB[indexB])) {
            mergeSorted.push(arrayA[indexA])
            indexA++
        } else{
            mergeSorted.push(arrayB[indexB])
            indexB++
        }
    }
    return mergeSorted
}

module.exports = { mergeSortedArrays }
