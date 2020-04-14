// the insight was to stop evaluating a node's children, but to evaluate the node itself
// when looking at the children, my universe is very small (just the node and its children)
// by evaluating the node itself, we can more easily keep track of its ancestors

// second insight was that when I go left, i reset the _upper_ bound
// and go right, reset the _lower_ bound. I had this backwards for a long time

function isValidBST(node) {
    let isValid = true
    function evaluateNode(node, lowerBound, upperBound) {
        if (!isValidDescendant(node.value, lowerBound, upperBound)) {
            console.log({ node, lowerBound, upperBound })
            isValid = false
            return isValid
        }
        isValid && node.left && evaluateNode(node.left, lowerBound, node.value)
        isValid && node.right && evaluateNode(node.right, node.value, upperBound)
    }

    isValid && node.left && evaluateNode(node.left, Number.NEGATIVE_INFINITY, node.value)
    isValid && node.right && evaluateNode(node.right, node.value, Number.POSITIVE_INFINITY)
    return isValid
}

function isValidDescendant(value, lowerBound, upperBound) {
    return lowerBound <= value && value <= upperBound
}

module.exports = { isValidBST }