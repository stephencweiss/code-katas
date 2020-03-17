export function pathFinding(n) {
  if (!(n >= 0)) return 0
  let startingPosition = [0, 0]
  let destination = n - 1
  let pathCount = 0

  function findPath(position) {
    let [east, north] = position

    if (east === destination && north === destination) {
      pathCount += 1
      return
    }

    if (east > north && north <= destination - 1) {
      findPath([east, north + 1])
    }

    if (east <= destination - 1) {
      findPath([east + 1, north])
    }
  }

  findPath(startingPosition)
  return pathCount
}
