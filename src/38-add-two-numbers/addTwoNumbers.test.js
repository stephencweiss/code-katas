const { addTwoNumbers, LinkedList } = require('./addTwoNumbers')

test('expect sum to work with equal length linked lists', () => {
  const l1Two = new LinkedList({ val: 3 })
  const l1One = new LinkedList({ val: 4, next: l1Two })
  const l1Head = new LinkedList({ val: 2, next: l1One })

  const l2Two = new LinkedList({ val: 4 })
  const l2One = new LinkedList({ val: 6, next: l2Two })
  const l2Head = new LinkedList({ val: 5, next: l2One })

  const sumTwo = new LinkedList({ val: 8 })
  const sumOne = new LinkedList({ val: 0, next: sumTwo })
  const sumHead = new LinkedList({ val: 7, next: sumOne })
  expect(addTwoNumbers(l1Head, l2Head)).toEqual(sumHead)
})

test('expect sum to work with unequal length linked lists', () => {
    const l1Two = new LinkedList({ val: 3 })
    const l1One = new LinkedList({ val: 4, next: l1Two })
    const l1Head = new LinkedList({ val: 2, next: l1One })
  
    const l2One = new LinkedList({ val: 6 })
    const l2Head = new LinkedList({ val: 5, next: l2One })
  
    const sumTwo = new LinkedList({ val: 4 })
    const sumOne = new LinkedList({ val: 0, next: sumTwo })
    const sumHead = new LinkedList({ val: 7, next: sumOne })
    expect(addTwoNumbers(l1Head, l2Head)).toEqual(sumHead)

})
test('expect sum to work when both lists are 1 element of both 0', () => {
    const l1Head = new LinkedList({ val: 0 })
    
    const l2Head = new LinkedList({ val: 0 })
  
    const sumHead = new LinkedList({ val: 0})
    expect(addTwoNumbers(l1Head, l2Head)).toEqual(sumHead)
})

test('expect sum to carry place properly', () => {
    const l1Head = new LinkedList({ val: 9 })
    
    const l2Head = new LinkedList({ val: 2 })
  
    const sumOne = new LinkedList({ val: 1})
    const sumHead = new LinkedList({ val: 1, next: sumOne})
    expect(addTwoNumbers(l1Head, l2Head)).toEqual(sumHead)
})

