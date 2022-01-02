/**
 * arg number - int
 * return string - the number translated to english
 */
function intEnglishTranslation(num) {
    if (num == 0) return 'Zero'

    const result = []

    const translateThreeAtATime = numToTranslate => {
        const words = []
        const onesPlace = numToTranslate % 10
        const tensPlace = (numToTranslate % 100) - onesPlace
        const hundredsPlace = (numToTranslate - tensPlace - onesPlace) / 100

        if (hundredsPlace) {
            words.push(unit[hundredsPlace] + ' Hundred')
        }
        if (tensPlace >= 20) {
            words.push(tens[tensPlace / 10 - 1])
            words.push(unit[onesPlace])
        } else {
            words.push(unit[tensPlace + onesPlace])
        }
        return words.filter(x => x).join(' ')
    }

    for (let i = 0; num > 0; i++, num = Math.floor(num / 1000)) {
        const words = translateThreeAtATime(num % 1000)

        words && result.unshift(words + ' ' + exponent[i])
    }

    return result.join(' ')
}

const unit = [
    '',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
]
const tens = [
    '',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
]
const exponent = ['', 'Thousand', 'Million', 'Billion', 'Trillion']

const translations = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million',
    1000000000: 'billion',
    1000000000000: 'trillion',
}

// intEnglishTranslation(1)
// intEnglishTranslation(12)
intEnglishTranslation(23)
intEnglishTranslation(93)
// intEnglishTranslation(112)
// intEnglishTranslation(124)
// intEnglishTranslation(1240)
// intEnglishTranslation(124012)
intEnglishTranslation(12401292)
// intEnglishTranslation(124012920)
// intEnglishTranslation(1240129204)
console.log(intEnglishTranslation(12401292014))

module.exports = { intEnglishTranslation }
