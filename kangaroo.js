function kangaroo(x1,v1,x2,v2){
    debugger; 
    // let x1 = parseInt(x1V1X2V2[0]);
    // let v1 = parseInt(x1V1X2V2[2]);
    // let x2 = parseInt(x1V1X2V2[4]);
    // let v2 = parseInt(x1V1X2V2[6]);
    // D = RxT
    // D1 = D2 (+/- the difference in starting position)
    let distanceDifference = Math.abs(x2-x1);
    let diff = (x2-x1);
    let leader;
    if (distanceDifference === diff){
        // console.log("x2 is ahead of x1 / equal");
        leader = `x2`;
    } else {
        // console.log("x1 is ahead of x2");
        leader = `x1`;
    }
    
    let time = 0;
    if (leader === `x2`){
        // -------------------------------->
        //   x1        x2                Meet
        time = (x2-x1)/(v1-v2);    
    } else {
        time = -((x2-x1)/(r1-r2));
    }
    console.log(typeof time);
    let meetOnGround = '';
    if (!isFinite(time)){
        console.log("NO");
        return meetOnGround = "NO";
        // Never meet, t = infinity
    } else if (Math.floor(time)===time){
        // meet = t = integer
        console.log("YES");
        return meetOnGround = "YES";
    } else if (Math.floor(time)!==time){
        // never meet on the ground, t = fraction
        console.log("NO");
        return meetOnGround = "NO";
    } else {
        console.log("Undefined");
        return meetOnGround = "NO";
    }
}


kangaroo(0,2,5,3);