// send two "runners" - if there's a loop, they'll eventually overlap. if there's not, the fast runner will get to the end in half the time.
function containsCycle(node) {
    let fastRunner = node
    let slowRunner = node

    while (fastRunner && fastRunner.next) {
        fastRunner = fastRunner.next.next
        slowRunner = slowRunner.next

        if (fastRunner === slowRunner) return true
    }
    return false
}

module.exports = {containsCycle}