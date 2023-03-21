const pivotInteger = require("./2485.find-the-pivot-integer");

test("Return the pivot integer", () => {
  expect(pivotInteger(8)).toBe(6);
});

test("Return 1 if n is 1", () => {
  expect(pivotInteger(1)).toBe(1);
});

test("Return -1 if the pivot integer does not exist", () => {
  expect(pivotInteger(4)).toBe(-1);
});

test("Return -1 if n is 0", () => {
  expect(pivotInteger(0)).toBe(-1);
});

test("Return -1 if n is -0", () => {
  expect(pivotInteger(-0)).toBe(-1);
});

test("Return -1 if n is -Infinity", () => {
  expect(pivotInteger(-Infinity)).toBe(-1);
});
