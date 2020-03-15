const { largestNumber } = require('./largestNumber')

test('expect to return the largest number in a list', () => {
  let list = [1, 2, 3, 4, 5]
  expect(largestNumber(list)).toBe(5)
})

test('expect to handle negative numbers in a list', () => {
  let list = [1, -2, 3, 4, 5]
  expect(largestNumber(list)).toBe(5)
})

test('expect to handle _all_ negative numbers in a list', () => {
  let list = [-1, -2, -3]
  expect(largestNumber(list)).toBe(-1)
})

test('expect empty list to return 0', () => {
  let list = []
  expect(largestNumber(list)).toBe(0)
})
