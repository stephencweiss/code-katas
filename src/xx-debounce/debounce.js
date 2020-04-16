function debounce(fn, delay) {
    let scheduleId
    return function debounced() {
        const initialContext = this
        const args = arguments
        const deferredCall = fn.apply(initialContext, args)
        if (scheduleId) {
            clearTimeout(scheduleId)
        }
        scheduleId = setTimeout(() => deferredCall(), delay)
    }
}
