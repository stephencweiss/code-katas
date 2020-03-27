const { permutationsIncludePalindrome } = require('./permutationsIncludePalindrome')

describe("evaluating for a palindrome", () =>{
    test("standard palindrome", () => {
        const input = "racecar"
        expect(permutationsIncludePalindrome(input)).toBe(true)
    })
    test("permutation has palindrome", () => {
        const input = "aaccrre"
        expect(permutationsIncludePalindrome(input)).toBe(true)
    })
    test("no palindrome", () => {
        const input = "civil"
        expect(permutationsIncludePalindrome(input)).toBe(false)
    })
    test("handle multiple repetitions", () => {
        const input = "bbccdddeeff"
        expect(permutationsIncludePalindrome(input)).toBe(true)
    })
    test("do not handle case", () => {
        const input = "RACEcar"
        expect(permutationsIncludePalindrome(input)).toBe(false)
    })
})