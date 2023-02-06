const maximumValue = require("./2496.maximum-value-of-a-string-in-an-array");

test("Return the maximum string length for the maximum value of the array", () => {
  expect(maximumValue(["alic3", "bob", "3", "4", "00000"])).toBe(5);
});

test("Return the maximum integer for the maximum value of the array", () => {
  expect(maximumValue(["1", "01", "001", "0005"])).toBe(5);
});

test("Return Infinity for the maximum value of the array when it's included in the array", () => {
  expect(maximumValue(["alic3", "bob", "3", "4", "00000", "Infinity"])).toBe(
    Infinity
  );
});

test("Return 0 for the maximum value of the array when the array is empty", () => {
  expect(maximumValue([])).toBe(0);
});
