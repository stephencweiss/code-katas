const {wordCloud} = require('./wordCloud')

describe("word cloud tests", () => {
    test("returns a map as expected", () => {
        const input = "returns a map as expected"
        const result = wordCloud(input)
        expect(result.has("returns")).toBe(true)
    })
    test("handles most punctuation", () => {
        const input = "returns a map as expected; co-operation."
        const result = wordCloud(input)
        expect(result.has("expected")).toBe(true)
        expect(result.has("expected;")).toBe(false)
        expect(result.has("co-operation")).toBe(true)
        expect(result.has("cooperation")).toBe(false)
    })
    test("handles repeats", () => {
        const input = "returns a returns"
        const result = wordCloud(input)
        expect(result.get("returns")).toBe(2)
    })
    test("handles repeats", () => {
        const input = "returns a returns"
        const result = wordCloud(input)
        expect(result.get("returns")).toBe(2)
    })
})