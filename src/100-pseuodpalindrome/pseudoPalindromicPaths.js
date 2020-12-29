/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths = function(root) {
    let pathCount = 0

    function evaluatePath(node, set) {
        if (isLeaf(node)) {
            if (set.size <= 1) {
                pathCount += 1
            }
            return
        }
        if (node.left) {
            const leftSet = new Set([...set])
            if (leftSet.has(node.left.val)) {
                leftSet.delete(node.left.val)
            } else {
                leftSet.add(node.left.val)
            }
            evaluatePath(node.left, leftSet)
        }
        if (node.right) {
            const rightSet = new Set([...set])
            if (rightSet.has(node.right.val)) {
                rightSet.delete(node.right.val)
            } else {
                rightSet.add(node.right.val)
            }
            evaluatePath(node.right, rightSet)
        }
    }

    evaluatePath(root, new Set([root.val]))
    return pathCount
}

function isLeaf(node) {
    return !node.left && !node.right
}
module.exports = { pseudoPalindromicPaths }
