class Lazy {
    constructor() {
        this.fnChain = []
    }
    add(fn, ...args) {
        this.fnChain.push(fn.bind(this, ...args))
        return this
    }
    invoke(args) {
        return this.fnChain.reduce((args, fn) => fn(...args), args)
    }
}

// const lazy = new Lazy()
// lazy.add((a, b) => a + b)
// lazy.add((a, b) => a * b, 3)
// console.log(lazy.invoke(3, 4))

const secondLazy = new Lazy()
secondLazy.add((arr) => arr.filter((el) => !isNaN(el)))
secondLazy.add((arr) => arr.sort())
secondLazy.add((arr) => arr[0])
console.log(secondLazy.invoke([1, 8, 3, 5, 'a', { el: 'faux' }, ['nested']]))
