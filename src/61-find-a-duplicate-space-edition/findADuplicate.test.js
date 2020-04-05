const {findADuplicate} = require('./findADuplicate')

describe("finding duplicates of an array without using space", () => {
    test("single duplicate", () => {
        const arr = [1,2,2,3,4,5,6,7,8,9]
        expect(findADuplicate(arr)).toBe(2)
    })
    test("multiple duplicates", () => {
        const arr = [1,2,3,4,5,6,7,7,8,9,9]
        expect(findADuplicate(arr)).toBe(7)
    })
    test("no duplicates", () => {
        const arr = [1,2,3,4,5,6,7,8,9]
        function noDupes(){
            return findADuplicate(arr)
        }
        expect(noDupes).toThrowError(`No Duplicate!`)
    })
})