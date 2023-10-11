const countPairs = require("./2824.count-pairs-whose-sum-is-less-than-target");

test("Return the number of pairs", () => {
  expect(countPairs([-1, 1, 2, 3, 1], 2)).toBe(3);
});

test("Return the number of pairs when the array nums contains 0", () => {
  expect(countPairs([-1, 1, 2, 3, 1, 0], 2)).toBe(6);
});

test("Return the number of pairs when the array nums contains Infinity and tartget is also Infinity", () => {
  expect(countPairs([-1, 1, 2, 3, 1, Infinity], Infinity)).toBe(10);
});

test("Return 0 when tartget is -Infinity", () => {
  expect(countPairs([-1, 1, 2, 3, 1, -Infinity], -Infinity)).toBe(0);
});
