/**
 * https://leetcode.com/problems/count-square-sum-triples/submissions/
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    const max = n ** 2
    let triples = 0
    for (let a = 2; a < n; a++) {
        for (let b = 2; b < n; b++) {
            const sum = a ** 2 + b ** 2
            if (sum > max) break
            const sqrt = Math.sqrt(sum)
            const roundedRoot = Math.round(sqrt)
            if (sqrt === roundedRoot) {
                triples += 1
            }
        }
    }
    return triples
}
