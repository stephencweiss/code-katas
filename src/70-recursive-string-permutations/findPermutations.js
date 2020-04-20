/**
 * findPermutations finds non-repetitive permutations of letters - i.e. if a letter is repeated, it is ignored in the final calculation
 *
 */
function findPermutations(str){

    // base case
    if (str.length <= 1){
        return new Set([str])
    }

    // split string into substrings
    const allCharactersSaveLast = str.slice(0, -1);
    const lastCharacter = str[str.length - 1]

    // recursively call substrings
    const allPermutationsExceptLastCharacter = findPermutations(allCharactersSaveLast);

    // place last character in iteratively
    const permutations = new Set();
    allPermutationsExceptLastCharacter.forEach(permutation => {
        for (let position = 0; position < allCharactersSaveLast.length; position += 1){
            const newPermutation = permutation.slice(0, position) + lastCharacter + permutation.slice(position)
            permutations.add(newPermutation)
        }
    })

    return permutation;
}