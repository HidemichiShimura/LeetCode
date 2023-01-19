const maxSubsequence = require("../jest-test/2099.find-subsequence-of-length-k-with-the-largest-sum");

test("Return a subsequence of length k", () => {
  expect(maxSubsequence([2, 1, 3, 3], 2)).toEqual([3, 3]);
});

test("Return a subsequence of length k with negative numbers", () => {
  expect(maxSubsequence([-1, -2, 3, 4], 3)).toEqual([-1, 3, 4]);
});

test("Return the entire array if k is 0", () => {
  expect(maxSubsequence([2, 1, 3, 3], 0)).toEqual([]);
});

test("Return an emtpy array if nums is emtpy", () => {
  expect(maxSubsequence([], 1)).toEqual([]);
});
