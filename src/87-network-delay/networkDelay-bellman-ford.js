/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
    const DEFAULT = Number.MAX_SAFE_INTEGER
    // step 1 - initialize the "graph"
    let durations = new Array(N + 1).fill(DEFAULT)
    // const predecessor = new Array(N).fill(null)

    // initialize _source_ distance as 0
    durations[K] = 0

    // step 2 - "relax" iteratively
    let relaxationCount = N - 1
    while (relaxationCount) {
        for (let [source, destination, duration] of times) {
            if (durations[source] + duration < durations[destination]) {
                durations[destination] = durations[source] + duration
                // predecessor[destination] = source
            }
        }
        relaxationCount -= 1
    }
    // step 3 - detect negative cycles
    for (let [source, destination, duration] of times) {
        if (durations[source] + duration < durations[destination]) {
            console.log(`cycle!`)
            return -1 // Negative Cycle
        }
    }

    // remove the 0th index of durations as it can never be modified
    durations = durations.splice(1)
    console.log({ durations })
    const maxDuration = Math.max(...durations)
    return  maxDuration == DEFAULT ? -1 : maxDuration
}

networkDelayTime(
    [[2,1,1],[2,3,1],[3,4,1]],
    4,
    2
)

// do it again with Djikstra's afterward because we _know_ that time can't be negative,
// so it's a good fit for this problem
