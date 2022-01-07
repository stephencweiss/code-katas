// https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s
        .split(' ')
        .map(reverseWord)
        .join(' ')
}

function reverseWord(word) {
    const letters = word.split('')
    let left = 0
    let right = letters.length - 1
    while (left < right) {
        const temp = letters[right]
        letters[right] = letters[left]
        letters[left] = temp
        left++
        right--
    }
    return letters.join('')
}
