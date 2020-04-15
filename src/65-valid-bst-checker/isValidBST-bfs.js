function isValidBST(node) {
    let isValid = true
    const queue = []
    queue.push({
        node,
        lowerBound: Number.NEGATIVE_INFINITY,
        upperBound: Number.POSITIVE_INFINITY,
    })
    while (queue.length) {
        const { node, upperBound, lowerBound } = queue.shift()
        if (!isValidDescendant(node.value, lowerBound, upperBound)) {
            isValid = false
            return isValid
        }
        node.left &&
            queue.push({ node: node.left, lowerBound, upperBound: node.value })
        node.right &&
            queue.push({ node: node.right, lowerBound: node.value, upperBound })
    }
    return isValid
}

module.exports = { isValidBST }
