export function minSalesPath(rootNode) {
  if (!rootNode || (rootNode && rootNode.cost === undefined))
    throw new Error('A root node is required')
  let minSalesPathVal = Number.POSITIVE_INFINITY

  function addSalesPath(node, currentSalesPathVal = 0) {
    const salesPathVal = currentSalesPathVal + node.cost
    console.log(minSalesPathVal, currentSalesPathVal)

    // base case - current sales path > minSalesPath
    if (salesPathVal > minSalesPathVal) {
      return
    }
    // base case - leaf node
    if (node.children.length === 0) {
      // evaluate new salesPath against Min
      if (salesPathVal < minSalesPathVal) {
        minSalesPathVal = salesPathVal
      }
      return
    }

    // recursive case
    return node.children.forEach(child => {
      addSalesPath(child, salesPathVal)
    })
  }

  addSalesPath(rootNode)
  return minSalesPathVal
}
