function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) return null
    let l1Cur = l1
    let l2Cur = l2
    let previousNode = new ListNode() // need to return the root

    if (l1Cur && l2Cur && l1Cur.val < l2Cur.val || !l2Cur){
        previousNode.val = l1Cur.val
        l1Cur = l1Cur.next
    } else {
        previousNode.val = l2Cur.val
        l2Cur = l2Cur.next
    }

    let rootNode = previousNode

    while(l1Cur || l2Cur ){

        let currentNode = new ListNode()
        if (l1Cur && l2Cur && l1Cur.val < l2Cur.val || !l2Cur){
            currentNode.val = l1Cur.val
            l1Cur = l1Cur.next
        } else {
            currentNode.val = l2Cur.val
            l2Cur = l2Cur.next
        }
        previousNode.next = currentNode
        previousNode = currentNode
    }
    return rootNode

};

