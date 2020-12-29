function max() {
    return Math.max.apply(null, arguments)
}

function filterNumbers() {
    return Array.prototype.filter.call(arguments, function(value) {
        return isNumeric(value)
    })
}

function isNumeric(n) {
    return !isNaN(n) && Number(n) === n
}

function filterRange(min, max) {
    var args = Array.prototype.slice.call(arguments, 2)
    return Array.prototype.filter.call(args, function(value) {
        return min <= value && value <= max
    })
}

// implementation

function Lazy() {
    this.chain = []
}

Lazy.prototype.add = function(fn, ...args) {
    this.chain.push(fn.bind(this, ...args))
    return this
}

Lazy.prototype.invoke = function(incomingArgs) {
    return this.chain.reduce((args, fn) => fn(...args), incomingArgs)
}

console.log(
    new Lazy()
        .add(filterNumbers)
        .add(filterRange, 2, 7)
        .add(max)
        .invoke([1, 8, 6, [], '7', -1, { v: 5 }, 4]) //6
)
