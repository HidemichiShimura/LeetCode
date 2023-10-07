const maximumNumberOfStringPairs = require("./2744.find-maximum-number-of-string-pairs");

test("Return the number of pairs", () => {
  expect(maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"])).toBe(2);
});

test("Return 0 if there is no pair", () => {
  expect(maximumNumberOfStringPairs(["aa", "ab"])).toBe(0);
});

test("Return 0 if the array words is empty", () => {
  expect(maximumNumberOfStringPairs([])).toBe(0);
});
