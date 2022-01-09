/**
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 * -- Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * BFS one row at a time
 * The next property will always be the first element in the list for the current row
 * If there is no first element, it will be null
 * While traversing a row, we'll build up the next row by adding children
 * When done with the row, we'll replace the row with the next
 * When there are no more rows, we'll return the root node
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root
    let row = [root]
    while (row.length) {
        const nextRow = []

        while (row.length) {
            const node = row.shift()
            // set pointer
            node.next = row[0] || null

            if (node.left != null) {
                // Assuming a perfect tree, so  if there's a left, there's also a right
                nextRow.push(node.left)
                nextRow.push(node.right)
            }
        }
        row = nextRow
    }
    return root
}
