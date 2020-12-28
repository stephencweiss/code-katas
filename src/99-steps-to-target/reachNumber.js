function reachNumber(target) {
    let currentStep = 1
    let currentValue = 1
    target = Math.abs(target) // treat all variants like a positive

    // This solution _ignores_ **finding** the actual result. Instead, it's
    // based on the realization that if we have over shot the target and land on
    // an odd number when the target is odd (or vice versa), we have gone a
    // sufficient number of steps.
    // The key is to realize we don't care about the _actual_ steps, only the
    // count.
    while (currentValue < target || currentValue % 2 !== target % 2) {
        currentStep += 1
        currentValue += currentStep
    }
    return currentStep
}

console.log(reachNumber(-2))
console.log(reachNumber(2))
console.log(reachNumber(3))
console.log(reachNumber(4))
console.log(reachNumber(5))
console.log(reachNumber(6))
