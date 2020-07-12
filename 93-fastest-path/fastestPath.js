/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    // keep track of current time elapsed
    let timeElapsed = 0
    // set current position = the first position in points
    let currentPosition = points[0]
    // for each point
    for (let i = 0; i < points.length; i++) {
        const targetPosition = points[i]
        let moveNecessary = true
        while (moveNecessary) {
            if (
                currentPosition[0] == targetPosition[0] &&
                currentPosition[1] == targetPosition[1]
            ) {
                currentPosition = targetPosition
                moveNecessary = false
            } else {
                currentPosition = movePoint(currentPosition, targetPosition)
                timeElapsed += 1
            }
        }
    }
    return timeElapsed
}

/**
 * Takes a current and target point,
 * returns a newCurrent
 */
function movePoint(current, target) {
    let [xCurrent, yCurrent] = current
    const [xTarget, yTarget] = target

    if (xCurrent < xTarget) {
        xCurrent += 1
    }
    if (yCurrent < yTarget) {
        yCurrent += 1
    }
    if (xTarget < xCurrent) {
        xCurrent -= 1
    }
    if (yTarget < yCurrent) {
        yCurrent -= 1
    }
    console.log({ xCurrent, yCurrent })
    return [xCurrent, yCurrent]
}
