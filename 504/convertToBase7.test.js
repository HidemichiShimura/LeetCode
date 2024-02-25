const convertToBase7 = require("./504.base-7");

test("Return a base 7 representation of a string, a positive integer", () => {
  expect(convertToBase7(100)).toBe("202");
});

test("Return a base 7 representation of a string, a negative integer", () => {
  expect(convertToBase7(-7)).toBe("-10");
});

test("Return a base 7 representation of a string 0", () => {
  expect(convertToBase7(0)).toBe("0");
});

test("Return a string of Infinity when the input num is Infinity", () => {
  expect(convertToBase7(Infinity)).toBe("Infinity");
});

test("Return a string of -Infinity when the input num is -Infinity", () => {
  expect(convertToBase7(-Infinity)).toBe("-Infinity");
});
