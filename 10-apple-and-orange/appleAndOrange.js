function countApplesAndOranges(s,t,a,b,apples,oranges){
    // apples = distance from a
    // count for the number of apples that this is true
    let houseStart = s;
    let houseEnd = t;
    let appleTree = a; 
    let orangeTree = b;
    let appleLandPos = apples.map(x => x + appleTree);
    let applesOnHouse = 0;
    for (let i = 0; i < appleLandPos.length; i++){
        let individualApplePos = appleLandPos[i];
        if (individualApplePos >= houseStart && individualApplePos <= houseEnd){
            applesOnHouse++;
        }
    }
    let orangeLandPos = oranges.map(x => x + orangeTree);
    let orangesOnHouse = 0;
    for (let i = 0; i < orangeLandPos.length; i++){
        let individualOrangePos = orangeLandPos[i];
        if (individualOrangePos >= houseStart && individualOrangePos <= houseEnd){
            orangesOnHouse++;
        }
    }
    console.log(applesOnHouse+'\n'+orangesOnHouse);
}