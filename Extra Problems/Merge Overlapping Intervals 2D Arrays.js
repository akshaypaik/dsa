// You are given an array of intervals, where each interval is represented as [start, end].
// Merge all overlapping intervals and return an array of non-overlapping intervals sorted by their start time.
// [[1,3],[2,6],[8,10],[15,18]]

const mergeOverlappingIntervals = (intervals) => {
  if (!Array.isArray(intervals) || intervals.length === 0) return [];

  // 1) Sort by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [];
  // Start with the first interval
  let [currStart, currEnd] = intervals[0];

  // 2) Scan and merge
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    // If the next interval overlaps or touches (start <= currEnd), extend the current end
    if (start <= currEnd) {
      currEnd = Math.max(currEnd, end);
    } else {
      // No overlap: push the current and reset
      merged.push([currStart, currEnd]);
      [currStart, currEnd] = [start, end];
    }
  }

  // 3) Push the last accumulated interval
  merged.push([currStart, currEnd]);

  return merged;
};

// Quick checks:
console.log(mergeOverlappingIntervals([[1,4],[4,5]]));           // [[1,5]]
console.log(mergeOverlappingIntervals([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
console.log(mergeOverlappingIntervals([[6,8],[1,3],[2,4]]));     // [[1,4],[6,8]]