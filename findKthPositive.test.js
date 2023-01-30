const findKthPositive = require("./1539.kth-missing-positive-number");

test("Return the kth positive integer that is missing from the array", () => {
  expect(findKthPositive([2, 3, 4, 7, 11], 5)).toBe(9);
});

test("Return 0 when k is 0", () => {
  expect(findKthPositive([2, 3, 4, 7, 11], 0)).toBe(0);
});

test("Return k when the array is empty", () => {
  expect(findKthPositive([], 5)).toBe(5);
});

test("Return 0 when k is a negative number", () => {
  expect(findKthPositive([2, 3, 4, 7, 11], -1)).toBe(0);
});
