function fib(n, memo = {}) {
    console.log(`calling fib of ${n}`)
    if (!memo[n]) {
        if (n < 0) throw new Error('No negative entries in sequence')
        if (n === 0 || n === 1) return 1
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    }
    return memo[n]
}

function memoize(fn) {
    const memo = {}
    return (...args) => {
        console.log(JSON.stringify({ args, memo }, null, 4))
        const key = JSON.stringify(...args)
        if (!memo[key]) {
            memo[key] = fn(...args, memo)
        } else {
        }
        return memo[key]
    }
}

const memoizedFib = memoize(fib)
console.log(memoizedFib(5))

