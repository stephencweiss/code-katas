const { reverseCharactersInPlace } = require('../47-reverse-string-in-place/reverseString')

function reverseWords(arrayOfCharacters) {
    reverseCharactersInPlace(arrayOfCharacters)
    // once the entire string is reversed
    // the words will be in order, but the characters of each word will be reversed
    let wordStartInd = 0
    let wordEndInd = 0
    while (wordStartInd <= arrayOfCharacters.length) {
        // starting with the 0th character, increment an end until you hit a space character - or the last character
        if ((arrayOfCharacters[wordEndInd] === ' ') || wordEndInd === arrayOfCharacters.length) {
            // reverse that portion of the array using the same technique of reversing in place
            // reverse subarray in place
            reverseWord(
                arrayOfCharacters,
                wordStartInd,
                wordEndInd - 1 // go back one character from the space
            )
            // reset start and end
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

const message = [
    'c',
    'a',
    'k',
    'e',
    ' ',
    'p',
    'o',
    'u',
    'n',
    'd',
    ' ',
    's',
    't',
    'e',
    'a',
    'l',
]
reverseWords(message)