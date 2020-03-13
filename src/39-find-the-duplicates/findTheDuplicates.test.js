const { findTheDuplicates } = require('./findTheDuplicates')

test('expect findTheDuplicates to return an array of duplicates', () => {
  const arr1 = [1, 2, 3, 5, 6, 7]
  const arr2 = [3, 6, 7, 8, 20]
  expect(findTheDuplicates(arr1, arr2)).toEqual([3, 6, 7])
})
test('expect findTheDuplicates to handle different starting positions', () => {
  const arr1 = [1, 2, 3, 5, 6, 7, 20]
  const arr2 = [8, 20]
  expect(findTheDuplicates(arr1, arr2)).toEqual([20])
})
test('expect findTheDuplicates to handle shorter array spanning wider ranger', () => {
  const arr1 = [2, 3, 5, 6, 7, 15]
  const arr2 = [1, 7, 20]
  expect(findTheDuplicates(arr1, arr2)).toEqual([7])
})
test('expect findTheDuplicates to return an empty array if no duplicates', () => {
  const arr1 = [1, 2, 3]
  const arr2 = [6, 7, 8, 20]
  expect(findTheDuplicates(arr1, arr2)).toEqual([])
})
test('expect findTheDuplicates to handle undefined and null arguments', () => {
  expect(findTheDuplicates()).toEqual([])
})
