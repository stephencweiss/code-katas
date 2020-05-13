
function kthToLastNode(k, head) {
    if (k <= 0) throw new Error('K needs to be a positive integer!')
    // Return the kth to last node in the linked list
    let len = 1
    let current = head
    while (current.next) {
        len += 1
        current = current.next
    }
    if (len - k < 0) throw new Error('List is not long enough!')
    let target = len - k
    current = head
    while (target) {
        current = current.next
        target -= 1
    }

    return current
}
module.exports = {kthToLastNode}