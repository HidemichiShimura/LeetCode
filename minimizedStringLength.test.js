const minimizedStringLength = require("./2716.minimize-string-length");

test("Return an integer denoting the length of the minimized string", () => {
  expect(minimizedStringLength("aaabc")).toBe(3);
});

test("Return the length of the string s if s consists of distinct characters", () => {
  expect(minimizedStringLength("abcde")).toBe(5);
});

test("Return 0 if the string s is empty", () => {
  expect(minimizedStringLength("")).toBe(0);
});
