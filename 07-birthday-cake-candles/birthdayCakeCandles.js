function birthdayCakeCandles(ar){
    // figure out what the largest int in the array is
    // figure out how many instances of that int there are in the array
    // print that number
    debugger;
    let maxCandleHeight = Math.max(...ar);
    let countOfCandlesExtinguished = 0;
    for (let i = 0; i < ar.length ; i++){
        candleHeight = ar[i];
        if (candleHeight == maxCandleHeight){
            countOfCandlesExtinguished++;
        }
    }
    console.log(countOfCandlesExtinguished);
    return countOfCandlesExtinguished
}

ar = [1,2,3,3]