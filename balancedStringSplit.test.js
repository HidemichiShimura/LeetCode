const balancedStringSplit = require("./1221.split-a-string-in-balanced-strings");

test("Return the maximum number of balanced strings obrainable", () => {
  expect(balancedStringSplit("RLRRLLRLRL")).toBe(4);
});

test("Return 0 if the input string has one letter", () => {
  expect(balancedStringSplit("L")).toBe(0);
});

test("Return 0 if the input string has no letter", () => {
  expect(balancedStringSplit("")).toBe(0);
});
