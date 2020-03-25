function firstComeFirstServed(dineInOrders, takeOutOrders, servedOrders) {
    if(servedOrders.length !== dineInOrders.length + takeOutOrders.length) return false
    let indexServedOrderToInvestigate = 0
    let indexDineInOrderToCompare = 0
    let indexTakeOutOrderToCompare = 0

    while (indexServedOrderToInvestigate < servedOrders.length) {
        const allDineInOrdersAccountedFor =
            indexDineInOrderToCompare >= dineInOrders.length
        const allTakeOutOrdersAccountedFor =
            indexTakeOutOrderToCompare >= takeOutOrders.length
        const currentOrder = servedOrders[indexServedOrderToInvestigate]
        let expectedOrderValue

        if (
            allTakeOutOrdersAccountedFor ||
            (!allDineInOrdersAccountedFor &&
                dineInOrders[indexDineInOrderToCompare] ===
                    Math.min(
                        dineInOrders[indexDineInOrderToCompare],
                        takeOutOrders[indexTakeOutOrderToCompare]
                    ))
        ) {
            expectedOrderValue = dineInOrders[indexDineInOrderToCompare]
            indexDineInOrderToCompare += 1
        } else {
            expectedOrderValue = takeOutOrders[indexTakeOutOrderToCompare]
            indexTakeOutOrderToCompare += 1
        }

        if (currentOrder !== expectedOrderValue) return false
        indexServedOrderToInvestigate++
    }
    return true
}

module.exports = { firstComeFirstServed }

const takeOutOrders = [1, 3, 5]
const dineInOrders = [2, 4, 6]
const servedOrders = [1, 2, 3, 5, 4, 6]
firstComeFirstServed(dineInOrders, takeOutOrders, servedOrders)
