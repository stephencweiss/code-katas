function diagonalDifference(ar){
    debugger;
    let slashArray = [];
    let backslashArray = [];
    let slashSum = 0;
    let backslashSum = 0;
    let arrayDifference = 0;
    if (ar.length !== ar[0].length){
        //test to confirm that the number of elements IN the array, is the same as the number of elements in the first array
        console.log(`The array is not a square, please adjust and try again`);
        return `The array is not a square, please adjust and try again`;
    } else {
        for (let i = 0; i < ar.length; i++){
            // create the "backslash" array - which is the top left to bottom right array;
            backslashArray.push(ar[i][i]);
        }
        for (let i = 0; i < ar.length; i++){
            // create the "slash" array - which is the top right to bottom left array; 
            let element = ar[i].reverse();
            slashArray.push(element[i]);
            ar[i].reverse();
        }
        for (let i = 0; i < backslashArray.length; i++){
            // sum the backslash array;
            backslashSum += backslashArray[i];
            // sum the slash array
        } 
        for (let i = 0; i < slashArray.length; i++){
            slashSum += slashArray[i];
        }
        arrayDifference = Math.abs(backslashSum - slashSum);
        return arrayDifference;
        // find the difference of the slash from the backslash (i.e. backslash - slash)
        // return the difference
    }
}

let sampleArray = [
    [6, 6, 7, -10, 9, -3, 8, 9, -1],
    [9, 7, -10, 6, 4, 1, 6, 1, 1],
    [-1, -2, 4, -6, 1, -4, -6, 3, 9],
    [-8, 7, 6, -1, -6, -6, 6, -7, 2],
    [-10, -4, 9, 1, -7, 8, -5, 3, -5],
    [-8, -3, -4, 2, -3, 7, -5, 1, -5],
    [-2, -7, -4, 8, 3, -1, 8, 2, 3],
    [-3, 4, 6, -7, -7, -8, -3, 9, -6],
    [-2, 0, 5, 4, 4, 4, -3, 3, 0]
]
diagonalDifference(sampleArray);