// Reverse the first k characters for every 2k characters of counting from the start of the string.
// If there are fewer than k characters left, reverse all of them.
// If there are less than 2k but greater than or equal to k characters,
// Then reverse the first k characters and leave the other as original.

const reverseStr = require("./541.reverse-string-ii");

test("Return a string the rule above is applied to", () => {
  expect(reverseStr("abcdefg", 2)).toBe("bacdfeg");
});

test("Return a empty string when the input string is empty", () => {
  expect(reverseStr("", 2)).toBe("");
});

test("Return the reversed string of the original input when k is Infinity", () => {
  expect(reverseStr("abcdefg", Infinity)).toBe("gfedcba");
});
