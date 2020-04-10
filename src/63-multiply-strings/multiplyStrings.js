/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(s1, s2) {
    if (s1 === '0' || s2 === '0') return '0' // early escape for multiplying by 0.

    const m = s1.length
    const n = s2.length
    // create an empty array of zeros; m+n-1 length is due to the matrix of numbers being multiplied
    // it does _not_ have to do with the size of the result
    const multiplied = Array(m + n - 1).fill(0)

    /**
     * For each integer, use a unary operator to cast a string as a number
     * starting at the end of each string, we work our way right to left
     * the position in our holding array, multiplied
     * we start at the "end" to be in the ones place and count up
     */
    for (let i = m - 1; 0 <= i; i--) {
        for (let j = n - 1; 0 <= j; j--) {
            multiplied[i + j] += +s1[i] * +s2[j]
        }
    }

    /**
     * Carry the "tens" for each position
     */
    for (let i = multiplied.length - 1; 0 < i; i -= 1) {
        multiplied[i - 1] += Math.floor(multiplied[i] / 10)
        multiplied[i] %= 10
    }

    return multiplied.join('')
}
