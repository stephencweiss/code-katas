/**
 * https://leetcode.com/problems/middle-of-the-linked-list/submissions/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let nodeCount = 1
    let cur = head
    while (cur.next) {
        cur = cur.next
        nodeCount++
    }

    let target = Math.floor(nodeCount / 2)
    cur = head
    while (target) {
        cur = cur.next
        target--
    }
    return cur
}

const middleNodeImproved = function(head) {
    let fast = head
    let slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}
