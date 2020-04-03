function firstComeFirstServed(dineInOrders, takeOutOrders, servedOrders) {
    let nextTOOrderInd = 0
    let nextDIOrderInd = 0
    let nextOrderInd = 0
    if(takeOutOrders.length + dineInOrders.length !== servedOrders.length) return false
    while (nextOrderInd < servedOrders.length) {
        if (servedOrders[nextOrderInd] === takeOutOrders[nextTOOrderInd]) {
            nextTOOrderInd++
            nextOrderInd++
        } else if (
            servedOrders[nextOrderInd] === dineInOrders[nextDIOrderInd]
        ) {
            nextDIOrderInd++
            nextOrderInd++
        } else {
            return false
        }
    }
    return true
}

module.exports = {firstComeFirstServedRedux: firstComeFirstServed}