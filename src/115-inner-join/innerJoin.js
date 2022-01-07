function innerJoin(tbl1, tbl2) {
    const result = []
    // create maps
    const tbl1Map = createMap(tbl1)
    const tbl2Map = createMap(tbl2)

    // iterate over map1
    tbl1Map.forEach((tbl1Rows, key) => {
        // look for keys in map2
        if (tbl2Map.has(key)) {
            const tbl2Rows = tbl2Map.get(key)
            // if key exists,
            // join and push to result
            tbl1Rows.forEach(t1Row =>
                tbl2Rows.forEach(t2Row =>
                    result.push([key, ...t1Row, ...t2Row])
                )
            )
        }
    })

    return result
}

function createMap(table) {
    const map = new Map()
    table.forEach(row => {
        const [key, ...rest] = row
        if (map.has(key)) {
            const cur = map.get(key)
            map.set(key, [...cur, rest])
        } else {
            map.set(key, [rest])
        }
    })
    return map
}

const tbl1 = [
    [1, 2, 3],
    [1, 5, 6],
    [1, 8, 9],
]

const tbl2 = [
    [1, 10, 11],
    [2, 12, 13],
    [3, 14, 15],
]

const tbl3 = [
    [1, 10, 11],
    [7, 1, 1],
    [4, 2, 3],
]

console.log(innerJoin(tbl1, tbl2))
console.log(innerJoin(tbl1, tbl3))
