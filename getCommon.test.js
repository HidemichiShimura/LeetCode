const getCommon = require("./2540.minimum-common-value");

test("Return the minimum integer common to both arrays", () => {
  expect(getCommon([1, 2, 3], [2, 4])).toBe(2);
});

test("Return -1 when both arrays have no common integer", () => {
  expect(getCommon([1, 3], [2, 4])).toBe(-1);
});

test("Return -1 when either array is empty", () => {
  expect(getCommon([], [2, 4])).toBe(-1);
});

test("Return -1 when either array is empty", () => {
  expect(getCommon([1, 2, 3], [])).toBe(-1);
});

test("Return -1 when both arrays are empty", () => {
  expect(getCommon([], [])).toBe(-1);
});
