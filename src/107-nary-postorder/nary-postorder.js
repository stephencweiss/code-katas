/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorderRecursive = function(root) {
    return visitChildren(root, [])
}

function visitChildren(node, path) {
    if (node === undefined || node === null) return path

    // if there are children
    // visit those first
    if (node.children) {
        node.children.map(child => path.push(...visitChildren(child, [])))
    }
    // then add the node
    path.push(node.val)

    // return the full list
    return path
}

// Iterative
function postorderIterative(root) {
    if (!root) return []
    const stack = []
    stack.push(root)
    const path = []
    while (stack.length) {
        const cur = stack.pop()
        if (cur.children) {
            cur.children.map(child => {
                stack.push(child)
            })
        }
        path.push(cur.val)
    }
    return path.reverse()
}