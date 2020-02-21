function solve(grades) {
  debugger
  return grades.map(n => {
    let diff = 5 - (n % 5)
    if (diff < 3 && n >= 38) {
      n += diff
    }

    return n
  })
}

solve([4, 73, 67, 38, 33])
