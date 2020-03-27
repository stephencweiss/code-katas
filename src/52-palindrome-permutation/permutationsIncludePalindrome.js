// edge cases - case, i.e. A vs a

function permutationsIncludePalindrome(str) {
    const unpairedLetters = new Set()

    for(let letter of str){
        if (unpairedLetters.has(letter)) {
            unpairedLetters.delete(letter)
        } else {
            unpairedLetters.add(letter)
        }
    }

    return unpairedLetters.size <= 1
}

module.exports = { permutationsIncludePalindrome }
