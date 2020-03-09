const { consecutiveLetters } = require('./consecutiveLetters')

test('expect s="eedaaad" to return "eedaad"', () => {
  expect(consecutiveLetters('eedaaad')).toBe('eedaad')
})

test('expect s="xxxtxxx" to return "xxtxx"', () => {
  expect(consecutiveLetters('xxxtxxx')).toBe('xxtxx')
})

test('expect s="uuuuxaaaaxuuu" to return "uuxaaxuu"', () => {
  expect(consecutiveLetters('uuuuxaaaaxuuu')).toBe('uuxaaxuu')
})

test('expect s with fewer than three characters to return without erroor', () => { expect(consecutiveLetters('aa')).toBe('aa')})

test('expect empty s to return without erroor', () => { expect(consecutiveLetters('')).toBe('')})
