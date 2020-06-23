/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 * The intuition here is that we can create a baseline score on the left - then we will be able to
 * compare each score by removing the "rightmost" card from the original set and replacing it with
 * the next card from the right side of the deck
 * Constraints are important as otherwise we would need additional error checking
 * 1 <= cardPoints.length <= 10^5
 * 1 <= cardPoints[i] <= 10^4
 * 1 <= k <= cardPoints.length
 */
var maxScore = function(cardPoints, k) {
    let currentSet = cardPoints.slice(0,k)
    let currentVal = currentSet.reduce((acc, cur) => acc + cur)
    let maxPoints = currentVal
    for (let i = 0; i < k; i+=1){
        const positionToSwap = currentSet.length -1 - i
        const newPoint = cardPoints[cardPoints.length -1 - i]
        currentVal = currentVal - currentSet[positionToSwap] + newPoint
        currentSet[positionToSwap] = newPoint
        maxPoints = Math.max(maxPoints, currentVal)
    }
    return maxPoints

};