function MergeIntervals(intervals) {
    if (intervals.length === 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);
    let cur = intervals[0];
    const result = [cur];

    for (let i = 1; i < intervals.length; i++) {
        const curRight = cur[1]; 
        const [nextLeft, nextRight] = intervals[i];
        
        if (curRight >= nextLeft) {
            cur[1] = Math.max(curRight, nextRight);
        } else {
            result.push(intervals[i]);
            cur = intervals[i];
        }
    }

    return result;
}

console.log(MergeIntervals([[1,3],[2,6],[8,10],[15,18]]))