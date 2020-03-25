function reverseCharactersInPlace(
    arrayOfChars,
    startInd = 0,
    endInd = arrayOfChars.length - 1
) {
    while (startInd < endInd) {
        swap(startInd, endInd, arrayOfChars)
        startInd ++
        endInd --
    }
    return arrayOfChars
}

function swap(a, b, array) {
    let temp = array[a]
    array[a] = array[b]
    array[b] = temp
    return array
}

module.exports = { reverseCharactersInPlace }