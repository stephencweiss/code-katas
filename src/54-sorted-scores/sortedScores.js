function sortScores(scores, HIGHEST_POSSIBLE_SCORE) {
    // create an empty array with a spot for each possible score, but with 0 scores counted
    const scoreHolder = new Array(HIGHEST_POSSIBLE_SCORE).fill(0)

    // for each score
    // increment the index of the scores array
    scores.forEach(score => (scoreHolder[score] += 1)) // assumes all scores are valid
    const sortedScores = []
    for (let i = HIGHEST_POSSIBLE_SCORE - 1; i >= 0; i -= 1) {
        let currentCount = scoreHolder[i]
        while (currentCount > 0) {
            sortedScores.push(i)
            currentCount -= 1
        }
    }
    return sortedScores
}

module.exports = { sortScores }
/**
 * Notes:
 * The first time I thought through this, I put everything into an object and then stored the scores in an array (similar to how I might envision a hash table).
 * { 1: [], 2: [], ... 91: [91, 91], ... 100: []}
 * Then, I could simply take the the values of the object and push them into an array in reverse order...
 * I could have also just stored a count, which is what I ended up doing with the array.
 *
 * I also definitely froze initially when thinking about sorting _faster_ than O(nlogn).
 * I _knew_ there had to be a trick as a result of a high score, but didn't see it right away.
 */
