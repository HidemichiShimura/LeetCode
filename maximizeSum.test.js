const maximizeSum = require("./2656.maximum-sum-with-exactly-k-elements");

test("Return the maximum score after performing the operations", () => {
  expect(maximizeSum([1, 2, 3, 4, 5], 3)).toBe(18);
});

test("Return Infinity for the maximum score if nums contains Infinity", () => {
  expect(maximizeSum([1, 2, 3, 4, Infinity], 3)).toBe(Infinity);
});

test("Return 0 if k is 0 and no operation is performed", () => {
  expect(maximizeSum([1, 2, 3, 4, 5], 0)).toBe(0);
});

test("Return 0 if k is -0 and no operation is performed", () => {
  expect(maximizeSum([1, 2, 3, 4, 5], -0)).toBe(0);
});

test("Return 0 if k is a negative number and no operation is performed", () => {
  expect(maximizeSum([1, 2, 3, 4, 5], -5)).toBe(0);
});

test("Return 0 if k is -Infinity and no operation is performed", () => {
  expect(maximizeSum([1, 2, 3, 4, 5], -Infinity)).toBe(0);
});
