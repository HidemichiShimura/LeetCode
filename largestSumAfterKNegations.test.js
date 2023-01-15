const largestSumAfterKNegations = require("../jest-test/1005.maximize-sum-of-array-after-k-negations");

test("Return the sum of nums after converting the minmum number", () => {
    expect(largestSumAfterKNegations([3,-1,0,2], 3)).toBe(6);
});

test("Return the sum of nums after converting the first k minmum numbers", () => {
    expect(largestSumAfterKNegations([2,-3,-1,5,-4], 2)).toBe(13);
});

test("Return 0 if nums consists of 0s", () => {
    expect(largestSumAfterKNegations([0,0,0], 2)).toBe(0);
});

test("Return Infinity if nums is empty", () => {
    expect(largestSumAfterKNegations([], 2)).toBe(0);
});