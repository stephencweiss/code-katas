/**
 * @param {number} flightLength
 * @param {Array<numbers>} movieLengths
 * @return {boolean} - If two movie lengths exist that pair exactly with the flight length
 */
function inflightPair(flightLength, movieLengths) {
    const movieLengthDb = movieLengths.reduce((db,movieLength) => {
        if (db[movieLength]) {
            db[movieLength] += 1
        } else {
            db[movieLength] = 1
        }
        return db
    }, {})


    for(let i = 0; i < movieLengths.length; i += 1) {
        const targetMovieLength = flightLength - movieLengths[i]
        const isExactlyHalf = targetMovieLength === movieLengths[i]
        if (movieLengthDb[targetMovieLength]) {
            if (!isExactlyHalf) {
                return true
            } else if (movieLengthDb[targetMovieLength] >= 2) {
                return true
            }
        }
    }


    return false;
}

module.exports = {inflightPair}