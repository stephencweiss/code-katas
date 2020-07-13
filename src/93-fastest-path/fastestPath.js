/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let timeElapsed = 0
    for (let i = 0; i < points.length - 1; i++) {
        let [xCurrent, yCurrent] = points[i]
        const [xTarget, yTarget] = points[i + 1]
        timeElapsed += Math.max(
            Math.abs(xCurrent - xTarget),
            Math.abs(yCurrent - yTarget)
        )
    }
    return timeElapsed
}
