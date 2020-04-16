function throttle(fn, delay) {
    let scheduledId
    return function throttled() {
        const context = this
        const args = arguments
        const throttledCall = fn.apply(context, args)
        if (scheduledId) return // I can safely ignore this invocation because I've already scheduled a request
        scheduledId = setTimeout(() => {
            throttledCall()
            clearTimeout(scheduledId)
        }, delay)
    }
}
