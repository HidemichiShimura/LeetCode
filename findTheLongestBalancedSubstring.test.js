const findTheLongestBalancedSubstring = require("./2609.find-the-longest-balanced-substring-of-a-binary-string");

test("Return the length of the longest balanced substring of s", () => {
  expect(findTheLongestBalancedSubstring("01000111")).toBe(6);
});

test("Return 0 if there is no balanced substring in s", () => {
  expect(findTheLongestBalancedSubstring("111")).toBe(0);
});

test("Return 0 if s is an empty string", () => {
  expect(findTheLongestBalancedSubstring("")).toBe(0);
});
