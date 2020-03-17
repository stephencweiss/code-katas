function numericSort(a,b){
    if (Number(a) < Number(b)){
        return -1
    } return 1
}

export function findSmallestPositiveInteger(arr){
    let smallestPositiveInteger = 1;
    const uniqueSortedSet = [...new Set(arr)].sort(numericSort)
    for (let i = 0; i < uniqueSortedSet.length; i += 1){
        if (uniqueSortedSet[i] === smallestPositiveInteger){
            smallestPositiveInteger += 1
        } else if (uniqueSortedSet[i] > smallestPositiveInteger){
            break;
        }
    }
    return smallestPositiveInteger
}