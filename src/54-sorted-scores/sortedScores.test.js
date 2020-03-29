const {sortScores} = require('./sortedScores')

describe("sorted score", () => {
    test("sorts score correctly", ()=> {
        const HIGHEST_POSSIBLE_SCORE = 100
        const scores = [37, 89, 41, 65, 91, 53, 91]
        const sortedScores = sortScores(scores, HIGHEST_POSSIBLE_SCORE)
        expect(sortedScores[0]).toBe(91)
    })
})