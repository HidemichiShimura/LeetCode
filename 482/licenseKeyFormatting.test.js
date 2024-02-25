const licenseKeyFormatting = require("./482.license-key-formatting");

test("Return the reformatted license key after divided exactly by k characters", () => {
  expect(licenseKeyFormatting("5F3Z-2e-9-w", 4)).toBe("5F3Z-2E9W");
});

test("Return the reformatted license key after divided by k characters where the first division consists of less than k characters", () => {
  expect(licenseKeyFormatting("2-5g-3-J", 2)).toBe("2-5G-3J");
});

test("Return the reformatted license key without a dash if the string's length is less than k", () => {
  expect(licenseKeyFormatting("5F3Z", 4)).toBe("5F3Z");
});

test("Return an empty string if the input string is empty", () => {
  expect(licenseKeyFormatting("", 4)).toBe("");
});
