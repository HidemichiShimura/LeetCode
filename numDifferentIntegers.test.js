const numDifferentIntegers = require("./1805.number-of-different-integers-in-a-string");

test("Return the number of distinct integers after performing the replacement operations on word", () => {
  expect(numDifferentIntegers("a123bc34d8ef34")).toBe(3);
});

test("Return the number of distinct integers after performing the replacement operations on word where the same integers with some leading zeroes", () => {
  expect(numDifferentIntegers("a1b01c001")).toBe(1);
});

test("Return 0 if word has no integers", () => {
  expect(numDifferentIntegers("leetcode")).toBe(0);
});

test("Return 0 if word is an empty string", () => {
  expect(numDifferentIntegers("")).toBe(0);
});
