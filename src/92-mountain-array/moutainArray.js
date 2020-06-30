/**
 * @param {number[]} A - an array of integers
 * @return {boolean} - whether the array is a "mountain array"
 *
 * a mountain array is strictly increasing until it's strictly decreasing
 * mountain arrays have to have _both_ an increasing _and_ decreasing period
 */
var validMountainArray = function(A) {
    if(A.length <= 2) return false
    let state = 'INCREASING'

    if(A[0] > A[1]){return false} // starts by decreasing

    for(let i = 1; i < A.length; i ++){
        const current = A[i]
        const previous = A[i-1]
        if ('INCREASING' == state){
            if(current < previous){
                state = 'DECREASING'
            } else if (current == previous){
                return false
            }
        } else if ('DECREASING' == state){
            if (current >= previous) {
                return false
            }
        } else {
            throw new Error(`Unknown state -> ${state}`)
        }
    }
    if ('INCREASING' == state){
        return false
    }
    return true
};