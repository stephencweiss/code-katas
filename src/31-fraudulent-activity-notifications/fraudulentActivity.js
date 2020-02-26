const fs = require('fs')

function main() {
  readInput(
    '/Users/stephen/_coding/personal/katas/hackerRankChallenges/src/31-fraudulent-activity-notifications/altInput'
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
  let median = 0
  let lookbackEnd = lookbackPeriod
  let lookbackStart = 0
  // if (lookbackPeriod === expenditures.length) return notificationCount;
  // given a lookback period - take a subset of the expenditures array and pass into calculateMedian (0 -> d)
  while (lookbackEnd < expenditures.length) {
    const expenseSubset = expenditures.slice(lookbackStart, lookbackEnd)
    const currentExpense = expenditures[lookbackEnd]
    median = calculateMedian(expenseSubset)
    const fraudAlert = assessFraudLevel(median, currentExpense)
    console.log({ expenseSubset, currentExpense, median, fraudAlert })
    if (assessFraudLevel(median, currentExpense)) {
      notificationCount += 1
    }
    lookbackEnd += 1
    lookbackStart += 1
  }
  return notificationCount
}

function calculateMedian(expendituresSubset) {
  const sortedExpenses = expendituresSubset.sort()
  const midIndex = sortedExpenses.length / 2
  let medianVal

  if (expendituresSubset.length % 2 === 0) {
    const lowVal = sortedExpenses[midIndex - 1]
    const highVal = sortedExpenses[midIndex + 1]
    medianVal = (lowVal + highVal) / 2
  } else {
    medianVal = expendituresSubset[Math.floor(midIndex)]
  }
  return medianVal
}

function assessFraudLevel(lookbackMedian, currentExpense) {
  if (currentExpense >= 2 * lookbackMedian) {
    return true
  } else return false
}

main()
