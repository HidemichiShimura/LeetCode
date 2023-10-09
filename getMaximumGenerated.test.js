const getMaximumGenerated = require("./1646.get-maximum-in-generated-array");

test("Return the maximum integer in the array nums", () => {
  expect(getMaximumGenerated(7)).toBe(3);
});

test("Return 0 if n is 0", () => {
  expect(getMaximumGenerated(0)).toBe(0);
});

test("Return 1 if n is 1", () => {
  expect(getMaximumGenerated(1)).toBe(1);
});
