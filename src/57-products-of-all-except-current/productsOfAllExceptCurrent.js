// Thsi approach is o(n) space and o(n) time, but it reqiures _two_ arrays of o(n) space
function getProductsOfAllIntsExceptAtIndex(arr){
    if (arr.length <2) throw new Error('to find product of other indices, need at least two elements')

    // create an initial sub array
    const subArr = arr.slice(1)
    const productsOfAll = []
    for(let i = 0; i < arr.length; i += 1){
        // calculate product
        const product = subArr.reduce((prev, cur) => prev * cur)
        // push product to products
        productsOfAll.push(product)
        // update subArr
        subArr[i] = arr[i]
    }
    return productsOfAll
}

// This is also o(n) space and time, but trades off the additional space for a second pass through the array
function getProductsOfAllIntsExceptAtIndexSpaceEfficient(arr){
    if (arr.length <2) throw new Error('to find product of other indices, need at least two elements')
    const result = []
    let productSoFar = 1;
    for(let i = 0; i < arr.length; i++){
        result[i] = productSoFar;
        productSoFar *= arr[i]
    }
    productSoFar = 1
    for (let j = arr.length - 1; j >= 0 ; j --) {
        result[j] *= productSoFar
        productSoFar *= arr[j]
    }
    return result
}

// const result = getProductsOfAllIntsExceptAtIndex([1,7,3,4])
const result = getProductsOfAllIntsExceptAtIndex([1,7,3,0])
const altResult = getProductsOfAllIntsExceptAtIndexSpaceEfficient([1,7,3,0])
console.log(result, altResult)
