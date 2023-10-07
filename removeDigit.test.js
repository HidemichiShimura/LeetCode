const removeDigit = require("./2259.remove-digit-from-number-to-maximize-result");

test("Return the maximized string", () => {
  expect(removeDigit("123", "3")).toBe();
});

test("Return the maximized string with number which has multiple occurrences of digit", () => {
  expect(removeDigit("1231", "1")).toBe("231");
});
