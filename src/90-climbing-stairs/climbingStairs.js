/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    let memo = {}
    
    function climbOptions(n, memo){
        if(memo[n]) return memo[n]
        if(n == 1){
            return 1
        }
        if(n == 2){
            return 2
        }
        memo[n] = climbOptions(n-1, memo) + climbOptions(n-2, memo)
        return memo[n]
    }
    
    return climbOptions(n, memo)
    
};



