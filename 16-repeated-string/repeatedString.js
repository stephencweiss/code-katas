/**
* @args {number} s - The substring that comprises an infinite string
* @args {number} n - The total length of the infinite string to consider
* @returns {number} The total number of occurrences of `a` in the considered string
* @example <caption>Example of repeatedString</caption>
* repeatedString(`abc`, 10) // returns 4 from the considered string `abcabcabca`
* // 3 times the number of occurrences **in** s
* // + the number of occurrences in the remainder
*/
const repeatedString = (s, n) => {
  const numberOfRepetitions = Math.floor(n / s.length );
  const remainderToConsider = n % s.length;
  const reducer = function (acc, cur) {
      if (cur === `a`) { acc += 1 }
      return acc
  }
  const occurrencesInS = s.split(``).reduce(reducer, 0)
  const occurrencesInRemainder = s.split(``).splice(0, remainderToConsider).reduce(reducer, 0)
  return((occurrencesInS * numberOfRepetitions) + occurrencesInRemainder)
}