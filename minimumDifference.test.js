const minimumDifference = require("./1984.minimum-difference-between-highest-and-lowest-of-k-scores");

test("Return the minimum possible difference of the highest score and the lowest score of k numbers in nums", () => {
  expect(minimumDifference([9, 4, 1, 7], 2)).toBe(2);
});

test("Return 0 if k is 1", () => {
  expect(minimumDifference([90], 1)).toBe(0);
});

test("Return 0 if nums comprises only of 0", () => {
  expect(minimumDifference([0, 0, 0], 1)).toBe(0);
});
