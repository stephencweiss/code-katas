const { reverseWords } = require('./reverseWords')

test("Testing the reverse in place", () => {
    const message = [
        'c',
        'a',
        'k',
        'e',
        ' ',
        'p',
        'o',
        'u',
        'n',
        'd',
        ' ',
        's',
        't',
        'e',
        'a',
        'l',
    ]
    const output = 'steal pound cake'
    expect(reverseWords(message)).toStrictEqual(output)
})