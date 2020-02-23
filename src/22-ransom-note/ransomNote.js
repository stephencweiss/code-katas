/*
* @args {Array} magazine - An array of strings with each word available in the magazine
* @args {Array} note - An array of strings for each word in the ransom note
* @returns {String} “Yes” if the words are available and in the appropriate case and “No” if not
* @example checkMagazine([`give`,`me`, `one`, `grand`, `today`, `night`], [`give`, `one`, `grand`, `today`]); // returns `Yes`
* @example checkMagazine([`give`,`me`, `one`, `grand`, `today`, `night`], [`Give`, `one`, `grand`, `today`]); // returns `No`

* Edge cases include repeated words -> can’t just look to see *if* we’ve seen, but the source
*/
function checkMagazine(magazine, note) {
  let wordsNeeded = {}

  if (note.length > magazine.length) {
    console.log(`No`)
    return `No`
  }

  for (let word in note) {
    if (wordsNeeded[note[word]]) {
      wordsNeeded[note[word]] += 1
    } else {
      wordsNeeded[note[word]] = 1
    }
  }

  for (let word in magazine) {
    if (wordsNeeded[magazine[word]] === 1) {
      delete wordsNeeded[magazine[word]]
    }
    if (wordsNeeded[magazine[word]] > 1) {
      wordsNeeded[magazine[word]] -= 1
    }
  }

  if (Object.keys(wordsNeeded).length === 0) {
    console.log(`Yes`)
    return `Yes`
  } else {
    console.log(`No`)
    return `No`
  }
}

console.log(
  checkMagazine(
    [`give`, `me`, `one`, `grand`, `today`, `night`],
    [`Give`, `one`, `grand`, `today`]
  )
)
