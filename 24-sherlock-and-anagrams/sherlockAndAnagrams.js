/**
*
* @arg {string} s - A string to analyze for anagrams
* @returns An integer representing the number of anagrams possible among substrings of s
* @example sherlockAndAnagrams(`mom`) // returns 3
* @example sherlockAndAnagrams(`abba`) // returns 4
* @example sherlockAndAnagrams(`cdcd`) // returns 5
* @example sherlockAndAnagrams(`abcd`) // returns 0
* @example sherlockAndAnagrams(`kkkk`) // returns 10
*/
function sherlockAndAnagrams(s){
  let anagramCount = 0;
  const subStrings = {};

  for (let startInd = 0; startInd <= s.length - 1; startInd += 1) {
    for (let endInd = startInd + 1; endInd <= s.length ; endInd += 1) {
      const subStr = s.slice(startInd, endInd)
      const orderedSubStr = subStr.split(``).sort().join(``);

      if ( subStrings[orderedSubStr] !== undefined ) {
        subStrings[orderedSubStr].push(subStr);
      } else {
        subStrings[orderedSubStr] = [subStr]
      }
    }
  }

  let matches = Object.values(subStrings)
  let multipleMatches = matches.filter(subArray => subArray.length > 1);

  // Arithmetic sequence of Triangle Numbers - https://byjus.com/maths/triangular-numbers/
  let counts = multipleMatches.map(el => el.length * (el.length -1) / 2)

  anagramCount = counts.reduce((acc, cur) => {return acc + cur}, 0)

  return anagramCount
}
// console.log(sherlockAndAnagrams(`ifailuhkqqhucpoltgtyovarjsnrbfpvmupwjjjfiwwhrlkpekxxnebfrwibylcvkfealgonjkzwlyfhhkefuvgndgdnbelgruel`))
// console.log(sherlockAndAnagrams(`gffryqktmwocejbxfidpjfgrrkpowoxwggxaknmltjcpazgtnakcfcogzatyskqjyorcftwxjrtgayvllutrjxpbzggjxbmxpnde`))
// console.log(sherlockAndAnagrams(`mqmtjwxaaaxklheghvqcyhaaegtlyntxmoluqlzvuzgkwhkkfpwarkckansgabfclzgnumdrojexnrdunivxqjzfbzsodycnsnmw`))
// console.log(sherlockAndAnagrams(`ofeqjnqnxwidhbuxxhfwargwkikjqwyghpsygjxyrarcoacwnhxyqlrviikfuiuotifznqmzpjrxycnqktkryutpqvbgbgthfges`))
// console.log(sherlockAndAnagrams(`zjekimenscyiamnwlpxytkndjsygifmqlqibxxqlauxamfviftquntvkwppxrzuncyenacfivtigvfsadtlytzymuwvpntngkyhw`))