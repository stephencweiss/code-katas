function findMatchingParen(str, position){
    const characters = str.split('');
    const stack = []
    for(let i = position; i < characters.length; i ++){
        if(characters[i] == '('){
            stack.push(characters[i])
        }
        if(characters[i] == ')'){
            stack.pop()
            if(stack.length === 0){
                return i
            }
        }
    }
    throw new Error('no matching closing paren')
}

console.log(findMatchingParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10))