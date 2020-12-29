// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function fillThePlane(N, S) {
    // write your code in JavaScript (Node.js 8.9.4)

    const seatPlan = generateSeatPlan(N)
    const filledSeats = fillSeats(seatPlan, S)
    return validForFamily(filledSeats)
}


function generateSeatPlan(N){

    let seatPlan = []
    while (N > 0) {
        let emptyRow = new Array(10).fill(0)
        seatPlan.push(emptyRow)
        N -= 1;
    }
    return seatPlan // [...Array(N)].fill([...Array(10)].fill(0))
}

// helper function that takes the already full seats places them into our array
function fillSeats(seatPlan, preFilledSeats) {
    let filledSeats = [...seatPlan]
    let previouslyFilled = preFilledSeats.split(" ")
    if( !previouslyFilled[0]) return filledSeats
    for(let i=0; i < previouslyFilled.length; i+=1){
        let row = previouslyFilled[0]
        let seat = seatIndex[previouslyFilled[1]]
        filledSeats[row][seat] = 1

    }
    return filledSeats
}

function validForFamily(filledSeats){
    let count = 0;
    filledSeats.forEach(row => {
        let firstWindow = row[1] === 0 && row[2] === 0 && row[3]===0 && row[4]===0
        let secondWindow = row[3]===0 && row[4]===0 && row[5] === 0 && row[6] === 0
        let thirdWindow = row[5] === 0 && row[6] === 0 && row[7]===0 && row[8]===0
        if (firstWindow && thirdWindow) {
            count += 2
        } else if ((firstWindow && !secondWindow) ||
        (!firstWindow && secondWindow && !thirdWindow) ||
        (!secondWindow && thirdWindow)) {
            count += 1
        }

    })
    return count;
}



// const seatsForFamilies: { //need to think about this more
//     one: [B,C,D,E],
//     two: [D,E,F,G],
//     three: [F,G,H,J]
// }

const seatIndex = {
    A:0,
    B:1,
    C:2,
    D:3,
    E:4,
    F:5,
    G:6,
    H:7,
    J:8,
    K:9
}

console.log(fillThePlane(2, "1A 2C 1F"))
// console.log(fillThePlane(1, ""))