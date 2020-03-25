const {reverseCharactersInPlace} = require('./reverseString')

test("Testing the reverse in place", () => {
    const arr = ['a','b','c','d','e']
    const output = ['e','d','c','b','a']
    expect(reverseCharactersInPlace(arr)).toStrictEqual(output)
})