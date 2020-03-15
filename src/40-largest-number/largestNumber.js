export const largestNumber = numbers => {
  if (numbers.length === 0) return 0
  let max = Number.NEGATIVE_INFINITY
  numbers.forEach(num => (max = Math.max(max, num)))
  return max
}
