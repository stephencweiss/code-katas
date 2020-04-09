function isSuperBalanced(rootNode) {
    const children = []
    const sides = ['left', 'right']

    // Handles situation where root node either has children which are leaves or a single level tree
    if (!areGrandChildrenLeaves(rootNode)) {
        sides.forEach(side => {
            children.push(rootNode[side])
        })
    } else {
        return areLeavesBalanced(rootNode)
    }

    while (children.length > 0) {
        const child = children.shift()
        const mapped = sides
            .map(side => {
                if (areGrandChildrenLeaves(child, side)) {
                    return areLeavesBalanced(child)
                } else {
                    child[side] && children.push(child[side])
                }
            })
            .filter(val => val === false)
        if (mapped.length > 0) return false
    }
    return true
}

function areGrandChildrenLeaves(node, side) {
    let child = node[side]
    if (!child) return false
    if (child.left || child.right) return false
    return true
}

function areLeavesBalanced(node) {
    return 2 === Math.abs(node.left.value - node.right.value)
}

module.exports = { isSuperBalanced }
