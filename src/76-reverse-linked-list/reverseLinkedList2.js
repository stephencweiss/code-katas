/**
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
var reverseList = function(head) {
    if (!head || (head && !head.next)) return head

    let prev = head
    let cur = head.next
    let next = cur.next
    prev.next = null
    while (cur) {
        cur.next = prev
        prev = cur

        if (next) {
            cur = next
            next = next.next
        } else {
            break
        }
    }
    return cur
}

// {val: 1, next: 2}
// {val: 2, next: 3}
// {val: 3, next: 4}

// prev = null
// cur = {val: 1, next: 2}
// next = {val: 2, next: 3}
// {val: 3, next: null}

// prev = {val: 1, next: null}
// cur = {val: 2, next: 1}
// next = {val: 3, next: null}

// {val: 1, next: null}
// prev = {val: 2, next: 1}
// cur = {val: 3, next: 2}
// next = // -> next = null
