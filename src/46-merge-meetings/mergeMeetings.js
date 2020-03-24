function sortMeetings(meetingA, meetingB) {
    return meetingA.start - meetingB.start <= 0 ? -1 : 1
}

function meetingsOverlap(meetingA, meetingB) {
    return meetingB.start <= meetingA.end
}

function mergeMeetings(meetings) {
    // create copy of meetings to avoid mutating original reference
    const copiedMeetings = JSON.parse(JSON.stringify(meetings)) // O(n) where n is the number of nodes (i.e., not just the number of elements in the array) this is a fairly expensive operation, wonder if it's strictly necessary?
    const sortedMeetings = copiedMeetings.sort(sortMeetings)
    const mergedMeetings = [copiedMeetings[0]]

    for (let i = 1; i < sortedMeetings.length; i += 1) {
        const currentMeeting = sortedMeetings[i]
        const mostRecentlyMerged = mergedMeetings[mergedMeetings.length - 1]
        // if the meeting overlaps with the most recently merged
        if (meetingsOverlap(mostRecentlyMerged, currentMeeting)) {
            // _replace_ the most recently merged with an updated copy
            const newMergedMeeting = {
                start: Math.min(currentMeeting.start, mostRecentlyMerged.start),
                end: Math.max(currentMeeting.end, mostRecentlyMerged.end),
            }
            mergedMeetings[mergedMeetings.length - 1] = newMergedMeeting
        } else {
            // add this to the most recently merged
            mergedMeetings.push(currentMeeting)
        }
    }
    return mergedMeetings
}

module.exports = { mergeMeetings }
