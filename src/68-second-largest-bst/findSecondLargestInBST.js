function findSecondLargest(node) {
    if (!node.right && !node.left) return null
    if (!node.right) return node.left.value
    let largestFound = false
    const queue = [{ node: node.right, parentVal: node.value }]
    while (queue.length > 0) {
        const { node, parentVal } = queue.shift()
        // does the node have a right child?
        // move on to look at that as it's the largest
        // be sure to bring along the current value in case the largest has no children
        if (!largestFound) {
            if (!node.right) {
                largestFound = true
                if (!node.left) {
                    return parentVal
                } else {
                    queue.push({ node: node.left })
                }
            } else {
                queue.push({node: node.right, parentVal: node.value})
            }
        } else {
            if (!node.right) {
                return node.value
            } else {
                queue.push({ node: node.right })
            }
        }
        /**
         * is largestValue? (!no right child)
         * if it's the largest value:
         *  0. store that we've found the largest value
         *  1. no children - return parent
         *  2. left child - queue it
         *
         * if largestValue has been found
         *  return the first node that's right most
         *
         *
         */
    }
}

module.exports = {findSecondLargest}