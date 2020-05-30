/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const INT_MAX = Math.pow(2, 31) - 1
    const INT_MIN = Math.pow(-2, 31)
    const WHITE_SPACE_CODE = 32
    const NEGATIVE_SIGN_CODE = 45
    const POSITIVE_SIGN_CODE = 43
    let sign = 1 // default to positive
    let signApplied = false
    let wordStarted = false
    const firstWordChars = []

    for (char in str) {
        const letterCode = str[char].charCodeAt()
        const numberCode = letterCode - 48
        const isValidNumber = 0 <= numberCode && numberCode <= 9
        const isSign =
            letterCode === NEGATIVE_SIGN_CODE ||
            letterCode === POSITIVE_SIGN_CODE
        if (letterCode !== WHITE_SPACE_CODE) {
            wordStarted = true
        }
        if (isSign) {
            if (firstWordChars.length > 0) break
            if (signApplied && firstWordChars.length == 0) break
            sign = letterCode === NEGATIVE_SIGN_CODE ? -1 : 1
            signApplied = true
        }
        if (isValidNumber) {
            firstWordChars.push(numberCode)
        }
        if (wordStarted && !isValidNumber && !isSign) {
            break
        }
    }
    let int = sign * firstWordChars.join('')
    if (isNaN(int)) int = 0
    if (INT_MAX < int) int = INT_MAX
    if (int < INT_MIN) int = INT_MIN
    return int
}