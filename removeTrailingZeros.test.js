const removeTrailingZeros = require("./2710.remove-trailing-zeros-from-a-string");

test("Return the integer num without trailing zeros as a string", () => {
  expect(removeTrailingZeros("51230100")).toBe("512301");
});

test("Return the innteger num as it is if num does not have trailing zeros", () => {
  expect(removeTrailingZeros("123")).toBe("123");
});
