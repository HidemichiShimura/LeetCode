const findRelativeRanks = require("./506.relative-ranks");

test("Return an array of ranks and placements", () => {
    expect(findRelativeRanks([5,4,3,2,1])).toEqual(["Gold Medal","Silver Medal","Bronze Medal","4","5"]);
});

test("Return an array of ranks if the score has only 3 elements", () => {
    expect(findRelativeRanks([5,4,3])).toEqual(["Gold Medal","Silver Medal","Bronze Medal"]);
});

test("Return an array of ranks and placements when the score contains Infinity in its elements", () => {
    expect(findRelativeRanks([Infinity,4,3,2,1])).toEqual(["Gold Medal","Silver Medal","Bronze Medal","4","5"]);
});

test("Return an array of ranks and placements when the score contains Infinity in its elements", () => {
    expect(findRelativeRanks([5,4,3,2,-Infinity])).toEqual(["Gold Medal","Silver Medal","Bronze Medal","4","5"]);
});