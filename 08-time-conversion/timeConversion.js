function timeConversion(incomingString){
    debugger;
    let day;
    if (incomingString.indexOf("AM")>0){
        day = true;
    } else {day = false;}
    
    // boolean True if last two characters of the incomingString are AM, false otherwise
    if (!day){
        // take first two characters
        let hourValue = incomingString.substring(0,2);
        incomingString = incomingString.substring(2,incomingString.length);
        // parseInt the two characters
        let hourValueInt = parseInt(hourValue);
        // replace them in the front of the string
        if (hourValueInt != 12){
            hourValueInt = hourValueInt+12;
        }
        hourValue = hourValueInt.toString();
        //add twelve to the first two characters of the string
        incomingString = hourValue + incomingString;
    } else if (day){
        // take first two characters
        let hourValue = incomingString.substring(0,2);
        // parseInt the two characters
        let hourValueInt = parseInt(hourValue);
        if (hourValueInt == 12){
            incomingString = incomingString.substring(2,incomingString.length);
            hourValueInt = hourValueInt-12;
            hourValue = hourValueInt.toString();
            hourValue = '0'+hourValue;
            incomingString = hourValue + incomingString;
        }
        // replace them in the front of the string
        //add twelve to the first two characters of the string
    }
    //remove suffix, can use slice
    let outgoingString = incomingString.slice(0,incomingString.length-2);
    return outgoingString;
}

timeConversion("04:59:59AM");