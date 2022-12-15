const trimMean = require("./1619.mean-of-array-after-removing-some-elements");

test("Return the mean of the remaining integers after removing some elements", () => {
    expect(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3])).toBeCloseTo(2.00000);
});

test("Return the mean of the remaining integers, which is zero, after removing some elements", () => {
    expect(trimMean([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])).toBeCloseTo(0.00000);
});