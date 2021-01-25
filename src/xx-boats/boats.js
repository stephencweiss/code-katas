/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort()
    const count = people.length

    let leftSlice =  people.slice(0, Math.floor(count/2))
    let rightSlice =  people.slice(Math.floor(count/2), count)
    let leftInd = 0
    let rightInd = rightSlice.length - 1

    let boats = 0
    while(leftSlice[leftInd] && rightSlice[rightInd]){
        if(rightSlice[rightInd] === limit ){
            rightInd --
            boats ++
        } else if (rightSlice[rightInd] + leftSlice[leftInd] <= limit) {
            rightInd --
            leftInd ++
            boats ++
        } else if (leftInd < leftSlice.length - 2 && leftSlice[leftInd]+leftSlice[leftInd+1] <= limit){
            leftInd += 2
            boats ++
        }
    }
    boats += leftSlice.slice(leftInd).length
    return boats
}

const people = [1,1,2,2,3,3,3,3,3,5]
const limit = 5
numRescueBoats(people, limit)