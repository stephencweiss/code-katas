const { minSalesPath } = require('./minSalesPath')

// Node Class
function Node(cost) {
  this.cost = cost
  this.children = []
}

test('expect minSalesPath to be a function', () => {
  expect(minSalesPath).toBeInstanceOf(Function)
})

test('expect minSalesPath to traverse tree', () => {
  const rootNode = new Node(0)
  const nodeOne = new Node(5)
  const nodeTwo = new Node(3)
  const nodeThree = new Node(6)
  const nodeFour = new Node(4)
  const nodeFive = new Node(2)
  const nodeSix = new Node(0)
  const nodeSeven = new Node(1)
  const nodeEight = new Node(5)
  const nodeNine = new Node(1)
  const nodeTen = new Node(10)
  const nodeEleven = new Node(1)

  rootNode.children.push(nodeOne, nodeTwo, nodeThree)
  nodeOne.children.push(nodeFour)
  nodeTwo.children.push(nodeFive, nodeSix)
  nodeThree.children.push(nodeSeven, nodeEight)
  nodeFive.children.push(nodeNine)
  nodeSix.children.push(nodeTen)
  nodeNine.children.push(nodeEleven)
  expect(minSalesPath(rootNode)).toBe(7)
})

test('expect that a rootnode is provided', () => {
  function emptySalesPath() {
    return minSalesPath()
  }
  expect(emptySalesPath).toThrowError('A root node is required')
})

test('expect to handle negative nodes', () => {
  const rootNode = new Node(0)
  const nodeOne = new Node(5)
  const nodeTwo = new Node(3)
  const nodeThree = new Node(6)
  const nodeFour = new Node(4)
  const nodeFive = new Node(2)
  const nodeSix = new Node(0)
  const nodeSeven = new Node(1)
  const nodeEight = new Node(5)
  const nodeNine = new Node(1)
  const nodeTen = new Node(-10)
  const nodeEleven = new Node(1)

  rootNode.children.push(nodeOne, nodeTwo, nodeThree)
  nodeOne.children.push(nodeFour)
  nodeTwo.children.push(nodeFive, nodeSix)
  nodeThree.children.push(nodeSeven, nodeEight)
  nodeFive.children.push(nodeNine)
  nodeSix.children.push(nodeTen)
  nodeNine.children.push(nodeEleven)
  expect(minSalesPath(rootNode)).toBe(-7)
})
