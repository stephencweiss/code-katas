const {mergeSortedList} = require('./mergeLists')

class ListNode {
    constructor(value, next){
        this.value = value ? value : 0
        this.next = next ? next : null
    }

}
describe('merge sorted lists', () => {
    test('standard case', () => {
        const node1 = new ListNode(1)
        const node2 = new ListNode(2)
        const node3 = new ListNode(4)
        const node4 = new ListNode(1)
        const node5 = new ListNode(3)
        const node6 = new ListNode(4)
        node1.next(node2)
        node2.next(node3)
        node4.next(node5)
        node5.next(node6)

        expect(mergeSortedList(node1, node4)).toBeTruthy()
    })
})