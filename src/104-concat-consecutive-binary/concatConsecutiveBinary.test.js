const {concatenatedBinary, convertIntToBinary, convertBinaryToDecimal } = require('./concatConsecutiveBinary')

describe('Concatenating Consecutive Binary Numbers', () => {
    test('Small N', ()=>{
        expect(concatenatedBinary(1)).toBe(1)
    })
    test('Medium N', ()=>{
        expect(concatenatedBinary(3)).toBe(27)
    })
    test('Larger N', ()=>{
        expect(concatenatedBinary(12)).toBe(118505380540) // Note: this is different from the Leetcode variant
    })
})

describe('Converting Ints To Binary', () => {
    test('Convert 1 to Binary', () => {
        expect(convertIntToBinary(1)).toBe('1')
    })
    test('Convert 13 to Binary', () => {
        expect(convertIntToBinary(13)).toBe('1101')
    })
})

describe('Convert Binary To Decimal', () => {
    test('Convert 1 to Decimal', () => {
        expect(convertBinaryToDecimal('1')).toBe(1)
    })
    test('Convert 1101 to Decimal', () => {
        expect(convertBinaryToDecimal('1101')).toBe(13)
    })
    test('Convert 1101110010111011110001001101010111100 to Decimal', () => {
        expect(convertBinaryToDecimal("1101110010111011110001001101010111100")).toBe(118505380540)
    })
})