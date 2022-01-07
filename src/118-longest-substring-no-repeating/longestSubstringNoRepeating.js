/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // for each letter in the string
    // start building up a count for a string
    // for each letter, add them to a set
    // if the set _has_ the letter,
    // first set the maxcount to the max of the current and previous lengths
    // then break and move on to the next letter
    // clear set
    let map = new Map()
    let maxCount = 0
    const letters = s

    for (let i = 0, head = 0; i < letters.length; i++) {
        const curLetter = letters[i]
        // if the map already has the letter
        // clear all of the keys up to where we found the duplicate (index i)
        // we'll track this position with the head for future reference.
        // without the head, it's possible that we could delete letters that _should_ remain.
        if (map.has(curLetter)) {
            const location = map.get(curLetter)
            for (let j = head; j <= location; j++) {
                console.log({
                    letter: curLetter,
                    loc: map.get(curLetter),
                    head,
                })
                map.delete(letters[j])
                head++
            }
        }

        // else: the map _doesn't_ have the letter,
        // set add the current letter to the map with its index as the value
        // the index is the location and will be used to clean up when we have
        // a duplicate
        map.set(curLetter, i)
        maxCount = Math.max(maxCount, map.size)
    }

    return maxCount
}
console.log(lengthOfLongestSubstring('abba'))
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('dvdf'))
console.log(lengthOfLongestSubstring('dvdfabd'))
console.log(lengthOfLongestSubstring('dvdfabde'))
