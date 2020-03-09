Source: [Microsoft Online Assessment Questions in JS | Medium](https://medium.com/javascript-in-plain-english/microsoft-online-assessment-questions-js-f68ecdb6e927)

# Question
Write a function that, given a string S of N lowercase English letters, returns a string with no instances of three identical consecutive letters, obtained from S by deleting the minimum possible number of letters.

Write an efficient algorithm for the following assumptions:
- N is an integer within the range [1..200,000]
- string S consists only of lowercase letters (a-z)

## Examples:
Given `S = "eedaaad"` , the function should return `"eedaad"` . One occurrence of letter a is deleted.
Given `S = "xxxtxxx"` , the function should return `"xxtxx"` . Note that letter x can occur more than three times in the returned string, if the occurrences are not consecutive.
Given `S = "uuuuxaaaaxuuu"` , the function should return `"uuxaaxuu"`.
