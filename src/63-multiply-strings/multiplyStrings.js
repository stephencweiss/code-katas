/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiplyStrings(num1, num2) {
    return String(convertStringToInt(num1) * convertStringToInt(num2))
}

function convertStringToInt(numStr) {
    return numStr
        .split('')
        .map(letter => charCodes[letter.charCodeAt()])
        .join('')
}

const charCodes = {
    48: 0,
    49: 1,
    50: 2,
    51: 3,
    52: 4,
    53: 5,
    54: 6,
    55: 7,
    56: 8,
    57: 9,
}
