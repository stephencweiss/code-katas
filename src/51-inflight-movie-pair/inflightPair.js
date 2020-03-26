/**
 * @param {number} flightLength
 * @param {Array<numbers>} movieLengths
 * @return {boolean} - If two movie lengths exist that pair exactly with the flight length
 */
function inflightPair(flightLength, movieLengths) {
    const observedMovieLengths = new Set()

    for (let i = 0; i < movieLengths.length; i += 1) {
        const currentMovieLength = movieLengths[i]
        const targetMovieLength = flightLength - currentMovieLength
        if (observedMovieLengths.has(targetMovieLength)) {
            return true
        } else {
            observedMovieLengths.add(currentMovieLength)
        }
    }

    return false
}

module.exports = { inflightPair }
