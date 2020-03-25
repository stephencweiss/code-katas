const { reverseCharactersInPlace } = require('../47-reverse-string-in-place/reverseString')

function reverseWords(arrayOfCharacters) {
    reverseCharactersInPlace(arrayOfCharacters)
    let wordStartInd = 0
    let wordEndInd = 0
    while (wordStartInd <= arrayOfCharacters.length) {
        if ((arrayOfCharacters[wordEndInd] === ' ') || wordEndInd === arrayOfCharacters.length) {
            reverseWord(
                arrayOfCharacters,
                wordStartInd,
                wordEndInd - 1 // go back one character from the space
            )
            wordEndInd += 1
            wordStartInd = wordEndInd
        } else {
            wordEndInd += 1
        }
    }
    return arrayOfCharacters.join('')
}

function reverseWord(arrayOfCharacters, wordStart, wordEnd) {
    return reverseCharactersInPlace(arrayOfCharacters, wordStart, wordEnd)
}

module.exports = { reverseWords }