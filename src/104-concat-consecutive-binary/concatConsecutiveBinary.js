function concatenatedBinary(n) {
    let convertedBinaryStrings = []
    for (let i = 1; i <= n; i++) {
        convertedBinaryStrings.push(convertIntToBinary(i))
    }
    return convertBinaryToDecimal(convertedBinaryStrings.join(''))
}

/**
 *
 * @param {number} num - A number to convert to Binary
 * @returns {string} - A string representation of the number as binary
 */
function convertIntToBinary(num) {
    let remainder = ''
    let numerator = num
    while (numerator > 0) {
        remainder += numerator % 2
        numerator = Math.floor(numerator / 2)
    }
    return remainder
        .split('')
        .reverse()
        .join('')
}

/**
 *
 * @param {string} binary - A string representation of a binary numbers
 * @returns {number} - A numeric representation of the binary number in decimal
 */
function convertBinaryToDecimal(binary) {
    let sum = 0
    let power = 0
    for (let i = binary.length - 1; i >= 0; i--) {
        const increment = Math.pow(2, power) * binary[i]
        // console.log({ power, digit: binary[i], increment })
        sum += increment
        power += 1
    }
    return sum //% (10**9 +7)
}


concatenatedBinary(12)
module.exports = {
    concatenatedBinary,
    convertIntToBinary,
    convertBinaryToDecimal,
}
