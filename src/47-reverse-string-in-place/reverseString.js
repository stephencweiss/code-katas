function reverseCharactersInPlace(arrayOfChars) {
    // Reverse the input array of characters in place
    const endPoint = Math.floor(arrayOfChars.length / 2)
    for (let i = 0; i < endPoint; i += 1) {
        const oppositeI = arrayOfChars.length - 1 - i
        swap(i, oppositeI, arrayOfChars)
    }
    return arrayOfChars
}

function swap(a, b, array) {
    let temp = array[a]
    array[a] = array[b]
    array[b] = temp
    return array
}

module.exports = {reverseCharactersInPlace}