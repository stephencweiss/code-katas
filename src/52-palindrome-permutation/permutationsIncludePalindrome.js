// edge cases - case, i.e. A vs a

function permutationsIncludePalindrome(str) {
    const letters = str.split('')
    const stringType = letters.length % 2 === 0 ? 'EVEN' : 'ODD'
    const occurrences = {}

    letters.forEach(letter => {
        //O(n)
        if (occurrences[letter]) {
            occurrences[letter] += 1
        } else {
            occurrences[letter] = 1
        }
    })

    const occurrencesCount = Object.values(occurrences)
    let oddsIncluded = 0

    occurrencesCount.forEach(occurrence => {
        // O(c) where c is capped at ~26 for English (+/- based on how we want to handle other characters, but still it's capped at the types of characters)
        if (occurrence % 2 !== 0) {
            oddsIncluded += 1
        }
    })

    if (stringType === 'EVEN') return true
    else if ( stringType === 'ODD' && oddsIncluded === 1) return true
    else return false
}

module.exports = { permutationsIncludePalindrome }
