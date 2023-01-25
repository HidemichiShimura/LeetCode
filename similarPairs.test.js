const similarPairs = require("./2506.count-pairs-of-similar-strings");

test("Return the number of similar string paris", () => {
  expect(similarPairs(["aba", "aabb", "abcd", "bac", "aabc"])).toBe(2);
});

test("Return 0 if there is no pair of similar strings", () => {
  expect(similarPairs(["nba", "cba", "dba"])).toBe(0);
});

test("Return 0 if the array is empty", () => {
  expect(similarPairs([])).toBe(0);
});

test("Return 0 if the array has only one element", () => {
  expect(similarPairs(["nba"])).toBe(0);
});

test("Return 0 if the array is empty", () => {
  expect(similarPairs([])).toBe(0);
});
