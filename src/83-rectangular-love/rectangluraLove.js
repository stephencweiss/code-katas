function rectangularLove(rectOne, rectTwo) {
    const {
        leftX: leftXOne,
        bottomY: bottomYOne,
        width: widthOne,
        height: heightOne,
    } = rectOne
    const {
        leftX: leftXTwo,
        bottomY: bottomYTwo,
        width: widthTwo,
        height: heightTwo,
    } = rectTwo
    let overlappingRectangle = {
        leftX,
        bottomY,
        width,
        height,
    }
    // check for intersection
    if (leftXOne < leftXTwo + widthTwo && bottomYOne < bottomYTwo + heightTwo) {
        overlappingRectangle = {
            leftX: leftXTwo,
            width: leftXOne + widthOne - leftXTwo,
            leftY: bottomYTwo,
            height: bottomYOne + heightOne - bottomYTwo,
        }
    }
    if (leftXTwo < leftXOne + widthOne && bottomYOne < bottomYTwo + heightTwo) {
        overlappingRectangle = {
            leftX: leftXOne,
            width: leftXTwo + widthTwo - leftXOne,
            leftY: bottomYTwo,
            height: bottomYOne + heightOne - bottomYTwo,
        }
    }
    if (leftXOne < leftXTwo + widthTwo && bottomYTwo < bottomYOne + heightOne) {
        overlappingRectangle = {
            leftX: leftXTwo,
            width: leftXTwo + widthTwo - leftXOne,
            leftY: bottomYOne,
            height: bottomYOne + heightOne - bottomYTwo,
        }
    }
    if (leftXTwo < leftXOne + widthOne && bottomYTwo < bottomYOne + heightOne) {
        overlappingRectangle = {
            leftX: leftXOne,
            width: leftXOne + widthOne - leftXTwo,
            leftY: bottomYOne,
            height: bottomYOne + heightOne - bottomYTwo,
        }
    }
    return overlappingArea
}


const myRectangle = {
    // Coordinates of bottom-left corner
    leftX: 1,
    bottomY: 1,

    // Width and height
    width: 6,
    height: 3,
}
