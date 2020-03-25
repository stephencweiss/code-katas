const { mergeSortedArrays } = require('./mergeSortedArrays')

test('merge sorted arrays', () => {
    let a = [1, 2, 4, 5, 14, 20]
    let b = [3, 5, 6, 10, 25]
    let output = [1, 2, 3, 4, 5, 5, 6, 10, 14, 20, 25]
    expect(mergeSortedArrays(a, b)).toStrictEqual(output)
})
