/**
 * Write a function that, given a string S of N lowercase English letters, returns a string with no instances of three identical consecutive letters, obtained from S by deleting the minimum possible number of letters.
 * @param {striing} str
 * @returns {string}
 */
function consecutiveLetters(str) {

  // i'm only interested in three letters at a time - so i shouldn't need to keep track of more
  // i can't introduce a new letter to break up a group of three - my only recourse is deleting
  // if the string is _less_ than three characters long, i can return the string itself

  // split into an array - o(n)
  // for each character from 3 -> end - O(n)
    // look up the character and the two preceeding
    // there's an opportunity to speed this up - if the two previous letters are different, we can jump ahead two, this doesn't change the total complexity though
    // if all three are the same, remove the latest and reevaluate <- this is the potentially troublesome step because removing a character from an array shifts the entire remaining string over one - which is o(n)
    // ^^ wondering if there might be a better way to do this by keeping track of everything that needs to be deleted and then splitting from the end to the beginning (if it's index based)

  const letters = str.split('')
  let deleted = 0;
  let currentCharacterIndex = 2;
  let comparisonA = letters[1];
  let comparisonB = letters[0];
  while (currentCharacterIndex < letters.length) {
    if (comparisonA === letters[currentCharacterIndex] && comparisonB === letters[currentCharacterIndex]) {
      // delete the character and repeat with the new version
      letters.splice(currentCharacterIndex, 1)
      deleted += 1
    } else {
      // shift values to the right
      comparisonA = comparisonB
      comparisonB = letters[currentCharacterIndex]
      currentCharacterIndex += 1
    }
  }

  console.log(`deleted -> `, deleted)
  return letters.join('')
}

module.exports = { consecutiveLetters }
