/**
 *
 * @param {Object} preferences - a preference ranking of options
 * @param {string[]} options - a list of options to select
 * @param {number} draws - the number of options to pull in a round
 */
function makeSelection(preferences, options, draws = 3) {
    const availableItems = [...options]
    const drawn = []
    while (drawn.length < draws) {
        const selectIndex = Math.floor(Math.random() * availableItems.length)
        const selected = selectItem(availableItems, selectIndex)
        drawn.push(selected)
    }

    const preferred = drawn.reduce((prev, cur) => {
        if (preferences.has(prev) && preferences.has(cur)) {
            return preferences.get(prev) < preferences.get(cur) ? prev : cur
        }
        console.log(`Missing preference!`)
        return prev
    })
    return preferred
}

function selectItem(list, index) {
    const len = list.length
    if (index > len || index < 0) {
        return undefined
    }
    if (index < len - 1) {
        const temp = list[index]
        list[index] = list[len - 1]
        list[len - 1] = temp
    }
    return list.pop()
}

function careerDraw(preferences, options, draws = 3, careerRounds = 6) {
    const drawResults = []
    while (careerRounds) {
        drawResults.push(makeSelection(preferences, options, draws))
        careerRounds--
    }
    return drawResults
}

function simulate(
    preferences,
    options,
    draws = 3,
    careerRounds = 6,
    iterations = 10000
) {
    const iterationResults = []
    while (iterationResults.length < iterations) {
        iterationResults.push(
            careerDraw(preferences, options, draws, careerRounds)
        )
    }
    const result = new Map()

    const flattenedResults = iterationResults.flat()
    flattenedResults.map(entry =>
        result.set(entry, result.has(entry) ? result.get(entry) + 1 : 1)
    )

    const totalDraws = flattenedResults.length

    result.forEach((val, key) => result.set(key, (val / totalDraws) * 100))
    return [...result.entries()]
}

const categories = [
    'Sustainability',
    'PEG',
    'Industrial Goods',
    'Retail',
    'TMT',
    'Pharma',
    'Healthcare',
]
const caseFrequency = [5, 30, 15, 15, 5, 10, 20]
const options = categories
    .map((cat, i) => Array(caseFrequency[i]).fill(cat))
    .flat()
const preferenceWeight = [1, 7, 6, 5, 2, 4, 3]
const myPreferences = new Map(
    categories.map((cat, i) => [cat, preferenceWeight[i]])
)

console.log(`simulation results: `, simulate(myPreferences, options))
