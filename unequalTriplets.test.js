const unequalTriplets = require("./2475.number-of-unequal-triplets-in-array");

test("Return the number of triplets that meet the conditions", () => {
  expect(unequalTriplets([4, 4, 2, 4, 3])).toBe(3);
});

test("Return 0 if triplets that meet the conditions do not exist", () => {
  expect(unequalTriplets([1, 1, 1, 1, 1])).toBe(0);
});

test("Return 0 if nums is an empty array", () => {
  expect(unequalTriplets([])).toBe(0);
});
