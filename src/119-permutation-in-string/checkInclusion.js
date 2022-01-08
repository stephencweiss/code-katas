// https://leetcode.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // create a map of all s1 letters
    let match = createMap(s1)
    let pointer1 = 0
    let pointer2 = s1.length - 1
    while (pointer2 < s2.length) {
        const start = s2[pointer1]
        const end = s2[pointer2]
        if (!match.has(start) || !match.has(end)) {
            pointer1++
            pointer2++
            continue
        }

        // if we get here, we know:
        // 1. that both the starting letter and ending letter are included in s1
        // 2. that the length of the string we're looking at is the length of s1
        // so, we need to check if all interim letters are included in s1
        // and they have the right frequency

        for (let i = pointer1; i <= pointer2; i++) {
            const letter = s2[i]
            if (!match.has(letter)) {
                // if the match does _not_ include the letter -, reset the map and break
                match = createMap(s1)
                break
            }
            const remainingFrequency = match.get(letter)
            if (remainingFrequency > 1) {
                // if the count > 1, decrement
                match.set(letter, remainingFrequency - 1)
            } else {
                // if the count == 1, remove
                match.delete(letter)
            }
        }
        if (match.size === 0) {
            return true
        } else {
            pointer1++
            pointer2++
        }
    }
    return false
}

function createMap(string) {
    const map = new Map() // letter: frequency
    string
        .split('')
        .forEach(letter =>
            map.set(letter, map.has(letter) ? map.get(letter) + 1 : 1)
        )
    return map
}

// console.log(checkInclusion('ab', 'dbewdac')) // false
// console.log(checkInclusion('ab', 'dbewbac')) // true
// console.log(checkInclusion('ab', 'dbewdab')) // true
// console.log(checkInclusion('aba', 'dbewdab')) // false
// console.log(checkInclusion('aba', 'dbewaab')) // true
console.log(checkInclusion('adc', 'dcda')) // true
