if spend is 2x median, notify client of potential fraud
no notification is sent until have at least that trailing number of prior days' transaction data (? what is _that_)

trailing days, `d`
client's total expenditures for period of `n` days
find the _number of notifications_ the client will receive over `n` days

example:
`d = 3`
`expenditures=[10,20,30,40,50]`
*no notifications can be sent until _at least_ day 4 - the first three are data collection only*

to find median = sorted numbers and take middle (if odd), if even, it's the average of the middle two


O: integer representing the number of notifications
I: `d` = an integer for the lookback period and `expenditures` - an array of expenditures, non-negative
C: `1<=n<=2x10^5`, `1<=d<=n`, `0<=expenditure[i]<=200`
E: