const fs = require('fs')

function main() {
  readInput(
    '/Users/stephen/_coding/personal/katas/hackerRankChallenges/src/31-fraudulent-activity-notifications/sampleInput'
  )
    .then(input => {
      const lookback = Number.parseInt(input[0], 10)
      const expenses = input[1].map(el => Number.parseInt(el, 10))
      return activityNotifications(expenses, lookback)
    })
    .then(notifications => console.log({ notifications }))
}

function readInput(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(err)
      }
      let unformatted = data.split('\n')
      unformatted[0] = unformatted[0].split(' ').pop()
      unformatted[1] = unformatted[1].split(' ')
      resolve(unformatted)
    })
  })
}

/**
 * O: integer representing the number of notifications
 * I: `d` = an integer for the lookback period and `expenditures` - an array of expenditures, non-negative
 * C: `1<=n<=2x10^5`, `1<=d<=n`, `0<=expenditure[i]<=200`
 * E:
 */
function activityNotifications(expenditures, lookbackPeriod) {
  let notificationCount = 0
  let medianIndexLow = Math.floor((lookbackPeriod - 1) / 2)
  let medianIndexHigh = Math.ceil((lookbackPeriod - 1) / 2)

  /**
   * This creates an empty array of lookback expenses
   * 201 indices because expenses are >=0 & <=200.
   */
  const sortedLookback = Array(201).fill(0)

  /**
   * Track each expense by incrementing the associated expense's index
   * This will be useful later to make sure that we are always tracking only the minimum number of expenses
   */
  for (let i = lookbackPeriod - 1; i >= 0; i -= 1)
    sortedLookback[expenditures[i]] += 1

  // Iterate through the expenses - beginning with the first after the lookback period
  for (
    let expenseInd = lookbackPeriod;
    expenseInd < expenditures.length;
    expenseInd += 1
  ) {
    const median = findMedian(sortedLookback, medianIndexLow, medianIndexHigh)
    if (expenditures[expenseInd] >= 2 * median) notificationCount += 1

    /**
     * Drop the lowest earliest lookback expenses (i.e. lowest index from expenditures)
     * Add the most recent expense
     * In this way, we keep one array for the entire period, limiting creation and space requirements
     */
    sortedLookback[expenditures[expenseInd - lookbackPeriod]] -= 1
    sortedLookback[expenditures[expenseInd]] += 1
  }
  return notificationCount
}

/**
 *
 * @param {*} sortedLookback
 * @param {*} medianIndexLow
 * @param {*} medianIndexHigh
 *
 * The for loops work by:
 *  - incrementing the value (which is equivalent to the index position in sortedLookback)
 *  - stopping when the index reaches the target medianIndex
 */
function findMedian(sortedLookback, medianIndexLow, medianIndexHigh) {
  let medianValueLow, medianValueHigh
  for (
    let value = 0, index = 0;
    index <= medianIndexHigh;
    index += sortedLookback[value], value++
  ) {
    if (index <= medianIndexLow) {
      medianValueLow = value
    }
    medianValueHigh = value
  }

  return (medianValueHigh + medianValueLow) / 2
}

main()