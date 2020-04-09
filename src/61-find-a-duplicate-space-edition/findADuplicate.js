function findADuplicate(numbersArr) {
    let start = 1
    let end = numbersArr.length - 1
    // set a start and end
    while (start < end) {
        // find the midpoint of the slice (floor between start and the end-start / 2)
        const midpoint = Math.floor(start + (end - start) / 2)
        let lowerFloor = 1
        let lowerCeiling = midpoint
        let upperFloor = midpoint + 1
        let upperCeiling = end

        const distinctPossibilitiesInLowerRange = lowerCeiling - lowerFloor + 1
        let foundInLowerRange = 0;

        numbersArr.forEach(number => {
            if(lowerFloor <= number && number <= lowerCeiling) {
                foundInLowerRange += 1
            }
        })

        if (distinctPossibilitiesInLowerRange < foundInLowerRange ) {
            start = lowerFloor;
            end = lowerCeiling
        } else {
            start = upperFloor
            end = upperCeiling
        }
    }
    return start
}

module.exports = { findADuplicate }

const numbers = [1,2,3]
findADuplicate(numbers)