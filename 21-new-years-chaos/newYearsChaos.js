/**
* Return the minimum number of bribes necessary for the order to be achieved.
* A bribe is defined as the ability for a number (representing a person in line) to jump ahead
* Assumption: The maximum number of bribes any single person can make is two.
* Assumption: The numbers for the individuals are integers and >= 1.
* @args {Array} q - The array of integers of n length
* @returns A string which is the minimum number of bribes necessary to achieve the outcome, or ‘Too chaotic’ if the outcome is not possible.
* @example minimumBribes([3,2,1,4,6,5,7,8]) // returns 3
* @example minimumBribes([2,1,5,3,4]) // returns 3
* @example minimumBribes([1,5,2,3,4]) // returns ‘Too chaotic’
*/
function minimumBribes (q) {
  debugger;
  let bribes = 0;
  for (let i = q.length - 1; i >= 0; i -= 1) {
    let curVal = q[i];
    let expVal = i + 1;

    if (curVal - expVal > 2) {
      console.log(`Too chaotic`)
      return `Too chaotic`;
    }

    for (let j = Math.max(0, curVal - 2); j < i; j += 1) {
      if (q[j] > curVal) { bribes += 1 }
    }
  }
  console.log(`Bribes -->` );
  console.log(bribes)
  return bribes;
}

function minimumBribesAlternative(q) {
  let swaps = 0;
  let min = q.length;
  for (var i = q.length - 1; i >= 0; i--) {
      if (q[i] - i > 3) {
          console.log(`Too chaotic`)
          return `Too chaotic`;
      }
      if (q[i] > i + 1) {
          swaps += (q[i] - (i + 1));
      }
      else {
        if (min > q[i]) {
            min = q[i];
        }
        else if (q[i] != min) {
            swaps++;
        }
      }
  }
  console.log(swaps)
  return swaps;
}