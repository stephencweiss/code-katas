/**
 *
 * @param {Array} arr1 - sorted array in ascending order
 * @param {Array} arr2 - sorted array in ascending order
 */
function findTheDuplicates(arr1, arr2) {
  let duplicates = []
  if (!arr1 || !arr2) return duplicates
  let shortArr, longArr
  if (arr1.length <= arr2.length) { // Ot(c), Os(c)
    shortArr = arr1
    longArr = arr2
  } else {
    shortArr = arr2
    longArr = arr1
  }

  // Ot(c), Os(c)
  let curShortIndex = 0
  let curLongIndex = 0
  let curShortVal = shortArr[curShortIndex]
  let curLongVal = longArr[curLongIndex]
  // while there the short array element is defined

  //Ot(n+m) - worst case is to iterate over item in both lists,
  while (curShortVal && curLongVal) {
    // 1. the same as the element in the longer array - add to dupes list, increment both indices
    if (curShortVal == curLongVal) {
      duplicates.push(curLongVal) //Os(min(n,m)) - potentially every element in the smaller array needs to be stored
      curShortIndex += 1
      curLongIndex += 1
      curShortVal = shortArr[curShortIndex] ? shortArr[curShortIndex] : undefined
      curLongVal = longArr[curLongIndex]
    }
    // 2. less than the element in the longer array's element - increment just the shorter element
    if (curShortVal < curLongVal) {
      curShortIndex += 1
      curShortVal = shortArr[curShortIndex] ? shortArr[curShortIndex] : undefined
    }
    // 3. greater than the element in the longer array's element - increment the longer lists' element
    if (curShortVal > curLongVal) {
        curLongIndex += 1
        curLongVal = longArr[curLongIndex] ? longArr[curLongIndex] : undefined
    }
  }
  return duplicates
}

module.exports = { findTheDuplicates }