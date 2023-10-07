const isGood = require("./2784.check-if-array-is-goodl");

test("Return false if the array nums does not have two occurrences of n", () => {
  expect(isGood([2, 1, 3])).toBeFalsy();
});

test("Return true if the array nums is a permutation of base[n]", () => {
  expect(isGood([1, 3, 3, 2])).toBeTruthy();
});

test("Return false if an element of nums has multiple occurrences", () => {
  expect(isGood([3, 4, 4, 1, 2, 1])).toBeFalsy();
});
