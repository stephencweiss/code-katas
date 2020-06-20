var climbStairs = function(n){
    if (n == 1) return 1
    let possibleSteps = new Array(n)
    possibleSteps[0] = 1
    possibleSteps[1] = 2
    for(let i = 2; i < n; i++){
        possibleSteps[i] = possibleSteps[i-2] + possibleSteps[i-1]
    }
    return possibleSteps[n-1]
}