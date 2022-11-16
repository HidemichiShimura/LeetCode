const canPermutePalindrome = require("./266.palindrome-permutation");

test("Return true if the input string's length is odd and has only one character which appears at odd times in the string", () => {
    expect(canPermutePalindrome("aab")).toBeTruthy();
});

test("Return false if the input string's length is even and has any character which appears at odd times in the string", () => {
    expect(canPermutePalindrome("code")).toBeFalsy();
});

test("Return false if the input string is empty", () => {
    expect(canPermutePalindrome("")).toBeFalsy();
});