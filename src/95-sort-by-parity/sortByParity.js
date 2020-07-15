var sortArrayByParityII = function(A) {
    const odds = []
    const evens = []
    const result = []
    for (let i = 0; i < A.length; i += 1) {
        if (A[i] % 2 == 0) {
            evens.push(A[i])
        } else {
            odds.push(A[i])
        }
    }
    for (let i = 0; i < A.length; i += 1) {
        if (i % 2 == 0) {
            result.push(evens.pop())
        } else {
            result.push(odds.pop())
        }
    }
    return result
}
