/**
*
* @arg {string}
* @arg {string}
* @returns {string} YES/NO for whether or not the strings share a common substring
* @example twoStrings(`and`, `art`) // returns True
* @example twoStrings(`cat`, `be`) // returns False
* @example twoStrings(`aaron`, `be`) // returns False
*/
function twoStrings(s1, s2) {

const shortStr = s1.length <= s2.length ? s1 : s2
const longStr = shortStr === s1 ? s2 : s1
const foundCharacters = {}

for (let char in shortStr) {
  foundCharacters[shortStr[char]] = true;
}

for (let char in longStr) {
  if (foundCharacters[longStr[char]]) {
    return `YES`
  }
}

  return `NO`
}
