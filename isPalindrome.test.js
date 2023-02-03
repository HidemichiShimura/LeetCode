const isPalindrome = require("./125.valid-palindrome");

test("Return true when str is a palindrome after after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBeTruthy();
});

test("Return false when str is not palindrome", () => {
  expect(isPalindrome("race a car")).toBeFalsy();
});

test("Return true when str is empty", () => {
  expect(isPalindrome(" ")).toBeTruthy();
});

test("Return true when str is made of non-alphanumeric characters", () => {
  expect(isPalindrome(":, ;")).toBeTruthy();
});
