const countQuadruplets = require("./1995.count-special-quadruplets");

test("Return the number of distinct quadruplets if there is at least one", () => {
  expect(countQuadruplets([1, 2, 3, 6])).toBe(1);
});

test("Return 0 if there is no distinct quadruplet", () => {
  expect(countQuadruplets([3, 3, 6, 4, 5])).toBe(0);
});

test("Return 0 if nums has elements less than 4", () => {
  expect(countQuadruplets([1, 2, 3])).toBe(0);
});
