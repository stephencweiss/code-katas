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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const levels = new Map()
    const queue = []
    let curLevel = 0
    queue.push({ node: root, level: curLevel })
    while (queue.length) {
        const { node, level } = queue.shift()
        if (!node) continue
        if (levels.has(level)) {
            levels.set(level, [...levels.get(level), node.val])
        } else {
            levels.set(level, [node.val])
        }
        curLevel = level + 1
        if (node.left) {
            queue.push({ node: node.left, level: curLevel })
        }
        if (node.right) {
            queue.push({ node: node.right, level: curLevel })
        }
    }
    return [...levels.values()]
}
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const node5 = new TreeNode(7)
const node4 = new TreeNode(15)
const node3 = new TreeNode(20, node4, node5)
const node2 = new TreeNode(9)
const node1 = new TreeNode(3, node2, node3)
console.log(levelOrder(node1))
