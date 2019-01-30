/**
*
* @args {Array} c - The clouds over which the player jumps, `0` is cumulus and legal; `1` is thunder and illegal.
* @returns {number | null} The minimum number of jumps to reach the end or null if not winnable
* @example jumpingOnClouds([0,1,0,0,0,1,0]) // Returns 3
* @example jumpingOnClouds([0,1,1,0]) // Returns null;
*/
const jumpingOnClouds = (c) => {
  let jumpCount = 0, curIndex = 0;
  const length = c.length;

  // while loop - while we’re not at the end of the array
  while (curIndex < length - 1) {
    // add 1 to the jump count
    const bigJump = curIndex + 2
    const littleJump = curIndex + 1;
    jumpCount += 1;
    // if  two jumps ahead legal?
    if (c[bigJump] === 0) {
      // yes - increment index by two
      curIndex += 2;
    }
    // else if one jump ahead legal?
    else if (c[littleJump] === 0) {
      // yes - increment index by one
      curIndex += 1;
    }
    else { return null; }
  }

  return jumpCount
}