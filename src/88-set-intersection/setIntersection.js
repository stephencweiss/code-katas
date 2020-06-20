/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {
    const sortedIntervals = intervals.sort(sortEndsThenStarts)
    let currentTail = []
    let answer = 0
    sortedIntervals.forEach(interval => {
        const start = interval[0]
        const end = interval[1]
        const startPoint = currentTail[0]
        const lastPoint = currentTail[1]

        if (!currentTail.length || lastPoint < start){
            currentTail = [end -1, end]
            answer += 2
        } else if ( startPoint < start){
            currentTail = [currentTail[1], end]
            answer += 1
        }

    })
    return answer

};

function sortEndsThenStarts(intervalA, intervalB){
    return intervalA[1] < intervalB[1] ? -1 : 1
}

const intOne = [[1,2],[2,3],[4,5]]
const intTwo = [[1,2],[6,7]]
const intTwoPointOne = [[1,7],[6,7]]
const intThree = [[1,2],[1,3],[2,3],[4,5]]
const intFour = [[1,2],[2,3],[1,3],[4,5]]
const intFive = [[1, 2], [2, 3], [2, 4], [4, 5]]

console.log(intersectionSizeTwo(intOne)) //  6
console.log(intersectionSizeTwo(intTwo)) // 4
console.log(intersectionSizeTwo(intTwoPointOne)) // 4
console.log(intersectionSizeTwo(intThree)) // 6
console.log(intersectionSizeTwo(intFour)) // 6
console.log(intersectionSizeTwo(intFive)) // 5

