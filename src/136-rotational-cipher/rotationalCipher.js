// Add any extra import statements you may need here

// Add any helper functions you may need here

function rotationalCipher(input, rotationFactor) {
    // Write your code here
    const chars = input.split('')

    const letterFactor = rotationFactor % 26
    const numberFactor = rotationFactor % 10
    const codes = chars.map(char => char.charCodeAt())
    const rotatedCodes = codes.map(code => {
        if (code >= 65 && 90 >= code) {
            if (90 >= code + letterFactor) {
                return code + letterFactor
            } else {
                return 65 + (code + letterFactor - 90 - 1)
            }
        } else if (code >= 97 && 122 >= code) {
            if (122 >= code + letterFactor) {
                return code + letterFactor
            } else {
                return 97 + (code + letterFactor - 122 - 1)
            }
        } else if (code >= 48 && 57 >= code) {
            if (57 >= code + numberFactor) {
                return code + numberFactor
            } else {
                return 48 + (code + numberFactor - 57 - 1)
            }
        } else {
            return code
        }
    })
    const rotatedChars = rotatedCodes.map(code => String.fromCharCode(code))
    return rotatedChars.join('')

    // boundaries
    // capitals A->Z 65-90
    // lowercase a->z 97->122
    // numbers 0->9 48-57
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printString(str) {
    var out = '["' + str + '"]'
    return out
}

var test_case_number = 1

function check(expected, output) {
    var result = expected == output
    var rightTick = '\u2713'
    var wrongTick = '\u2717'
    if (result) {
        var out = rightTick + ' Test #' + test_case_number
        console.log(out)
    } else {
        var out = ''
        out += wrongTick + ' Test #' + test_case_number + ': Expected '
        out += printString(expected)
        out += ' Your output: '
        out += printString(output)
        console.log(out)
    }
    test_case_number++
}

var input_1 = 'All-convoYs-9-be:Alert1.'
var rotationFactor_1 = 4
var expected_1 = 'Epp-gsrzsCw-3-fi:Epivx5.'
var output_1 = rotationalCipher(input_1, rotationFactor_1)
check(expected_1, output_1)

var input_2 = 'abcdZXYzxy-999.@'
var rotationFactor_2 = 200
var expected_2 = 'stuvRPQrpq-999.@'
var output_2 = rotationalCipher(input_2, rotationFactor_2)
check(expected_2, output_2)

// Add your own test cases here
