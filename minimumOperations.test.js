const minimumOperations = require("./2357.make-array-zero-by-subtracting-equal-amounts");

test("Return the minimum number of operations to make every element in nums equal to 0", () => {
  expect(minimumOperations([1, 5, 0, 3, 5])).toBe(3);
});

test("Return the minimum number of operations to make every element in nums with Infinity equal to 0", () => {
  expect(minimumOperations([1, 5, 0, 3, Infinity])).toBe(4);
});

test("Return the minimum number of operations to make every element in nums with -Infinity equal to 0", () => {
  expect(minimumOperations([1, 5, 0, 3, -Infinity])).toBe(3);
});

test("Return 0 if all the elements in nums are already 0", () => {
  expect(minimumOperations([0, 0, 0])).toBe(0);
});
