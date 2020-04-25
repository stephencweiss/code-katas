const brackets = {
    openers: new Set(['(', '[', '{']),
    closers: new Set([')', ']', '}']),
    pairs: {
        '(': ')',
        '[': ']',
        '{': '}',
    },
}

function isBracketValid(string) {
    const bracketStack = []
    let isValid = false
    for (let i = 0; i < string.length; i += 1) {
        const character = string.charAt(i)
        if (brackets.openers.has(character)) {
            bracketStack.push(character)
        }
        if (brackets.closers.has(character)) {
            const topOfStack = bracketStack[bracketStack.length - 1]
            if (brackets.pairs[topOfStack] === character) {
                bracketStack.pop()
            } else {
                return isValid
            }
        }
    }
    if (bracketStack.length === 0) {
        isValid = true
    }
    return isValid
}

console.log(isBracketValid('{[]()}')) //true
console.log(isBracketValid('{[]}()')) //true
console.log(isBracketValid('{[](})')) //false
console.log(isBracketValid('{[}')) //false
