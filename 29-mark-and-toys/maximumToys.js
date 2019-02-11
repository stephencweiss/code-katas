
/**
 *
 * @arg {Array} prices - A list of prices, where each price is an integer
 * @arg {number} budget - The total budget we can afford
 * @returns {number} The maxiumum quantity of toys we can afford to purchase given the budget
 */
function maximumToys(prices, budget) {
  // sort the prices in ascending order
  const sortAscending = (a,b) => { return a<=b ? -1 : 1}
  prices.sort(sortAscending)
  let spentSoFar = 0;
  let itemsAfforded = 0
  let index = 0
  while (spentSoFar < budget) {
    spentSoFar += prices[index]
    itemsAfforded += 1
    index += 1
  }

  if (spentSoFar > budget) {
    return itemsAfforded - 1
  }
  return itemsAfforded
}

// function sortAscending(a,b) {
//   return a <= b ? -1 : 1
// }

console.log(maximumToys([12,1,2,5,8],16)); // 4