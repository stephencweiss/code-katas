/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const WHITE_SPACE = 32
    const POSITIVE = 43
    const NEGATIVE = 45
    const INT_MAX = Math.pow(2, 31) - 1
    const INT_MIN = Math.pow(-2, 31)
    let result = 0
    if (!str.length) return result

    let index = 0
    // iterate to non white space
    while (index < str.length && str[index].charCodeAt() == WHITE_SPACE) {
        index += 1
    }

    // place the sign
    let sign = null
    if ( index < str.length && (
        str[index].charCodeAt() === NEGATIVE ||
        str[index].charCodeAt() === POSITIVE)
    ) {
        sign = str[index].charCodeAt() === NEGATIVE ? -1 : 1
        index += 1
    }

    while (index < str.length) {
        const charCode = str[index].charCodeAt() - 48
        if (0 <= charCode && charCode <= 9) {
            result *= 10
            result += charCode
        } else {
            break
        }
        index += 1
    }
    result = sign ? sign * result : result
    if (isNaN(result)) result = 0
    if (INT_MAX < result) result = INT_MAX
    if (result < INT_MIN) result = INT_MIN
    return result
}
