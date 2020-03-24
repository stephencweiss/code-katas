import {mergeMeetings} from './mergeMeetings'
describe("Testing the mergeMeeting function", () => {
    test("given non-overlapping meetings, return complete set",() => {
        const meetings = [
            {start: 7, end: 8},
            {start: 9, end: 10},
            {start: 11, end: 12},
        ]
        expect(mergeMeetings(meetings)).toStrictEqual(meetings)
    })
    test("given a set of meetings which all overlap, return a single meeting",() => {
        const meetings = [
            {start: 7, end: 9},
            {start: 8, end: 11},
            {start: 10, end: 12},
        ]
        const result = [{start: 7, end: 12}]
        expect(mergeMeetings(meetings)).toStrictEqual(result)
    })
    test("appropriately handle adjacent meetings",() => {
        const meetings = [
            {start: 7, end: 9},
            {start: 9, end: 11},
            {start: 11, end: 12},
        ]
        const result = [{start: 7, end: 12}]
        expect(mergeMeetings(meetings)).toStrictEqual(result)
    })
    test("appropriately handle subsumed meetings",() => {
        const meetings = [
            {start: 7, end: 13},
            {start: 9, end: 11},
            {start: 11, end: 12},
        ]
        const result = [{start: 7, end: 13}]
        expect(mergeMeetings(meetings)).toStrictEqual(result)
    })
})