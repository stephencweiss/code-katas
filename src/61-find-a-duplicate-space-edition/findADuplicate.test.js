const {findADuplicate} = require('./findADuplicate')

describe("finding duplicates of an array without using space", () => {
    test("single duplicate", () => {
        const numbers = [1,2,2,3,4,5,6,7,8,9]
        expect(findADuplicate(numbers)).toBe(2)
    })
    test("multiple duplicates", () => {
        const numbers = [1,2,3,4,5,6,7,7,8,9,9]
        expect(findADuplicate(numbers)).toBe(7)
    })
    test("unsorted with duplicate", () => {
        const numbers = [1,3,4,5,8,9,6,7,2,2]
        expect(findADuplicate(numbers)).toBe(2)
    })
    test("unsorted with multiple duplicates, always chooses lower", () => {
        const numbers = [1,3,4,5,9,9,6,7,7,2]
        expect(findADuplicate(numbers)).toBe(7)
    })
})