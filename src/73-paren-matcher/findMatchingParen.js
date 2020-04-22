function findMatchingParen(str, position){
    const characters = str.split('');
    let openParensWithoutMatch = 0
    for(let i = position; i < characters.length; i ++){
        if(characters[i] == '('){
            openParensWithoutMatch += 1
        }
        if(characters[i] == ')'){
            openParensWithoutMatch -= 1
            if(openParensWithoutMatch === 0){
                return i
            }
        }
    }
    throw new Error('no matching closing paren')
}

console.log(findMatchingParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10))