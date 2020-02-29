Imagine a number pad:
```
1 2 3
4 5 6
7 8 9
  0
```
We want to write a function that has 2 inputs; a starting position, and a number of digits in a phone number
And returns the number of different phone numbers that can be created if each digit has to be within an L (2 digits in 1 direction and then 1 digit in another) shape of the next.

For example, a starting point of 0 has two valid end points:
```
 X X X       X X X
 X X X       4 X X       4 X
 X X X ->    X X X   =     X
   0           0           0
   |
   |         X X X
   - -->     X X 6         X 6
             X X X   =     X
               0           0
```
countNumbers(startNum = 0, numDigits = 2) = 2 because there are 2 valid phone numbers: 04 and 06
countNumbers(startNum = 0, numDigits = 3) = 6 because there are 6 valid phone numbers: 040, 043, 049, 060, 061, 067
