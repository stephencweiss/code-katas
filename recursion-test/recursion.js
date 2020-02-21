let factorialValue = 1
function factorial(x) {
  debugger
  if (x >= 0) {
    if (x === 1 || x === 0) {
      factorialValue = x
    } else {
      for (let i = x; i > 0; i--) {
        factorialValue * factorial(x - 1)
      }
    }
  } else {
    console.log('undefined!')
  }
  return factorialValue
}

factorial(4)
