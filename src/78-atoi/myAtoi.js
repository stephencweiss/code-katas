/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const int = parseInt(str.trim().split(' ')[0])
    const INT_MAX = Math.pow(2, 31) - 1
    const INT_MIN = Math.pow(-2, 31)
    if (isNaN(int)) return 0
    if (INT_MAX < int) return INT_MAX
    if (int < INT_MIN) return INT_MIN
    return int
}
