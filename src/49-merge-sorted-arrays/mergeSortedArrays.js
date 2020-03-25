function mergeSortedArrays(arrayA, arrayB) {
    let indexA = 0
    let indexB = 0
    let mergeSorted = []
    while (indexA < arrayA.length && indexB < arrayB.length) {
        if (arrayA[indexA] <= arrayB[indexB]) {
            mergeSorted.push(arrayA[indexA])
            indexA++
        } else {
            mergeSorted.push(arrayB[indexB])
            indexB++
        }
    }

    if (indexA < arrayA.length) {
        for (indexA; indexA < arrayA.length; indexA++) {
            mergeSorted.push(arrayA[indexA])
        }
    }

    if (indexB < arrayB.length) {
        for (indexB; indexB < arrayB.length; indexB++) {
            mergeSorted.push(arrayB[indexB])
        }
    }

    return mergeSorted
}

module.exports = {mergeSortedArrays}