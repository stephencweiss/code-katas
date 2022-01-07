/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head) return head
    const begin = { val: -1, next: head }

    let [slow, fast] = [begin, begin]
    let lead = n
    // two pointers, fast and slow
    // the lead is the the numbers of steps that the "fast" one should have as a lead
    // this is equivalent to the number of steps from the end
    while (lead) {
        fast = fast.next
        lead--
    }
    // now that the fast one has the lead
    // if the two pointers travel at the same pace
    // the fast one will arrive at the end...
    // at the same time that the slow one will arrive at the nth-from-the-end node,
    // i.e., the target node
    while (fast.next) {
        ;[slow, fast] = [slow.next, fast.next]
    }
    // now that slow's arrived at the target node,
    // we can skip it's next value
    removeNextNode(slow)

    // return the head
    return begin.next
}

function removeNextNode(node) {
    return (node.next = node.next.next)
}
