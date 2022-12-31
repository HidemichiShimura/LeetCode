const frequencySort = require("./1636.sort-array-by-increasing-frequency");

test("Return the array sorted by increasing frequency and decreasing value for the same frequency", () => {
    expect(frequencySort([1,1,2,2,2,3])).toEqual([3,1,1,2,2,2]);
});

test("Return the array with negative values sorted by increasing frequency and decreasing value for the same frequency", () => {
    expect(frequencySort([-1,1,-6,4,5,-6,1,4,1])).toEqual([5,-1,4,4,-6,-6,1,1,1]);
});

test("Return the array with Infinity and -Infinity sorted by increasing frequency and decreasing value for the same frequency", () => {
    expect(frequencySort([1,1,1,-Infinity,-Infinity,Infinity,Infinity]))
    .toEqual([Infinity,Infinity,-Infinity,-Infinity,1,1,1]);
});