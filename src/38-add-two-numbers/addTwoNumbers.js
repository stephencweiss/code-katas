/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class LinkedList {
  constructor({ val, next }) {
    this.val = val
    this.next = next || null
  }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  return sumNodes(l1, l2)
}

function sumNodes(nodeOne, nodeTwo, carry = 0) {
  const valOne = findVal(nodeOne)
  const valTwo = findVal(nodeTwo)
  const nextOne = nodeOne && nodeOne.next ? nodeOne.next : 0
  const nextTwo = nodeTwo && nodeTwo.next ? nodeTwo.next : 0

  if (valOne === null && valTwo === null && !carry) {
    return null
  }

  const { sum, carry: carryVal } = sumNumbers(valOne, valTwo, carry)
  return new LinkedList({
    val: sum,
    next: sumNodes(nextOne, nextTwo, carryVal),
  })
}

function findVal(node) {
  if (node && node.val !== null && node.val !== undefined) {
    return node.val
  } else {
    return null
  }
}

function sumNumbers(l1Val = 0, l2Val = 0, carry = 0) {
  const intermediateSum = l1Val + l2Val + carry
  return findOnesAndCarry(intermediateSum)
}

function findOnesAndCarry(num) {
  const numArr = String(num).split('')
  if (numArr.length === 1) return { sum: num, carry: 0 }
  const onesPlace = numArr.splice(numArr.length - 1, 1)
  return { sum: Number(onesPlace[0]), carry: Number(numArr.join('')) }
}

module.exports = { addTwoNumbers, LinkedList }
