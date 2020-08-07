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
 * @return {number} - the total number of pseudo-palindromic paths
 * a pseudo-palindromic path is one in which the nodes that comprise the path can be rearranged to be a palindrome
 */
var pseudoPalindromicPaths = function(root) {
    let palindromicPaths = 0

    function seekLeaf(node, path) {
        if (!node.left && !node.right && isPseudoPalindromic(path)) {
            palindromicPaths += 1
        }
        path.push(node.val)
        if (node.left) {
            seekLeaf(node.left, path)
        }
        if (node.right) {
            seekLeaf(node.right, path)
        }
    }
    seekLeaf(root, [])

    return palindromicPaths
}

/**
 * @param {number[]} path - the nodes that constitute the path
 * @return {boolean}
 */
function isPseudoPalindromic(path) {
    let pathSet = new Set()
    path.forEach(value => {
        if (pathSet.has(value)) {
            pathSet.delete(value)
        } else {
            pathSet.add(value)
        }
    })
    return pathSet.size <= 1
}
