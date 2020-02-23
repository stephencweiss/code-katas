const breakingRecords = scores => {
  debugger
  let newInput = scores.split('\n')
  let games = parseInt(newInput[0])
  let newScores = newInput[1].split(' ')
  for (let i = 0; i < newScores.length; i++) {
    newScores[i] = parseInt(newScores[i])
  }
  let highScores = 0
  let lowScores = 0
  let currentHigh = newScores[0]
  let currentLow = newScores[0]
  for (let i = 1; i < games; i++) {
    if (newScores[i] > currentHigh) {
      currentHigh = newScores[i]
      highScores++
    } else if (newScores[i] < currentLow) {
      currentLow = newScores[i]
      lowScores++
    }
  }
  console.log(highScores + ' ' + lowScores)
}

// function breakingRecords(scores) {
//     debugger;
//     let min = scores[0];
//     let max = scores[0];
//     let result = [0, 0];

//     for (let index = 0; index < scores.length; index++) {
//         if (scores[index] > max) {
//             max = scores[index];
//             result[0] = result[0] + 1;
//         }

//         if (scores[index] < min) {
//             min = scores[index];
//             result[1] = result[1] + 1;
//         }
//     }

//     return result;

// }
// this passes the test cases... but shouldn't! it doesn't account for strings vs. numbers and doesn't account for the way the array is on two lines!

breakingRecords(`9
10 5 20 20 4 5 2 25 1`)
