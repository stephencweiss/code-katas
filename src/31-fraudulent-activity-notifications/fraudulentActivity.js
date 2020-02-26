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
  let medianIndexLow = Math.floor((lookbackPeriod-1) / 2)
  let medianIndexHigh = Math.ceil((lookbackPeriod-1) / 2)
  // if (lookbackPeriod === expenditures.length) return notificationCount;
  // given a lookback period - take a subset of the expenditures array and pass into calculateMedian (0 -> d)
  while (lookbackEnd < expenditures.length) {
    const expenseSubset = expenditures.slice(lookbackStart, lookbackEnd).sort()
    const currentExpense = expenditures[lookbackEnd]
    median = calculateMedian(expenseSubset, medianIndexLow, medianIndexHigh)

    if (assessFraudLevel(median, currentExpense)) {
      notificationCount += 1
    }
    lookbackEnd += 1
    lookbackStart += 1
  }
  return notificationCount
}

function calculateMedian(expendituresSubset, medianIndexLow, medianIndexHigh) {
  return (
    (expendituresSubset[medianIndexHigh] + expendituresSubset[medianIndexLow]) /
    2
  )
}

function assessFraudLevel(lookbackMedian, currentExpense) {
  if (currentExpense >= 2 * lookbackMedian) {
    return true
  } else return false
}

main()


// function activityNotifications (expenditure, d) {
//
//     // Number of notifications
//     let n = 0
//
//     // Set midpoints for median calculation
//     let [ i1, i2 ] = [ Math.floor((d-1)/2), Math.ceil((d-1)/2) ]
//     let m1, m2, m
//
//     // Initialize count sorted subarray
//     let cs = new Array(201).fill(0)
//     for (let i = d-1; i >= 0; i--) cs[expenditure[i]]++
//
//     // Iterate through expenditures
//     for (let i = d, l = expenditure.length; i < l; i++) {
//
//         // Find median
//         for (let j = 0, k = 0; k <= i1; k += cs[j], j++) m1 = j
//         for (let j = 0, k = 0; k <= i2; k += cs[j], j++) m2 = j
//         let m = (m1 + m2) / 2
//
//         // Check if notification is given
//         if (expenditure[i] >= m * 2) n++
//
//         // Replace subarray elements
//         cs[expenditure[i-d]]--
//         cs[expenditure[i]]++
//     }
//
//     return n
// }
//