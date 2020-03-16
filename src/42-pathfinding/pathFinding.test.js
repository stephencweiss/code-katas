const { pathFinding } = require('./pathFinding')

test('expect path finding to work with postive n', () => {
  expect(pathFinding(4)).toBe(5)
})

test('expect path finding to return on bad inputs', () => {
  expect(pathFinding(-3)).toBe(0)
  expect(pathFinding('a')).toBe(0)
})
