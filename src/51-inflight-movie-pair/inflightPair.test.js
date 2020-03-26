const { inflightPair } = require('./inflightPair')

describe('inflight pairs', () => {
    test('two times sum to flight length', () => {
        let flightLength = 180
        let movieLengths = [90, 89, 91, 100]
        expect(inflightPair(flightLength, movieLengths)).toBe(true)
    })
    test('movie is exactly half flight length; but only one', () => {
        let flightLength = 180
        let movieLengths = [90, 89, 92, 100]
        expect(inflightPair(flightLength, movieLengths)).toBe(false)
    })
    test('movie is exactly half flight length; but has second instance', () => {
        let flightLength = 180
        let movieLengths = [90, 89, 90, 100]
        expect(inflightPair(flightLength, movieLengths)).toBe(true)
    })

})
