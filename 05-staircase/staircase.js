function staircase(n) {
    // assumes n is an integer
    debugger;
    let row = '';
    // iterate through n rows
    for (let i = n; i >0 ; i--){
        // figure out the number of spaces (n-i (as i++)) // will want to make sure to account for length and the need for at least one space
        row += ' '.repeat((i-1));
        // figure out the number of pounds (k as k++)
        row += '#'.repeat(n-i+1);
        // print a row
        row += '\n'
    }
    console.log(row);
}

staircase(6);

