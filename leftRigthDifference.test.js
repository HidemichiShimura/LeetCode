const leftRigthDifference = require("./2574.left-and-right-sum-differences");

test("Return an array of absolute values of leftSum and rightSum", () => {
  expect(leftRigthDifference([10, 4, 8, 3])).toBe([15, 1, 11, 22]);
});

test("Return an array which contains only one of zeros", () => {
  expect(leftRigthDifference([1])).toBe([0]);
});

test("Return an empty array if nums is empty", () => {
  expect(leftRigthDifference([])).toBe([]);
});
