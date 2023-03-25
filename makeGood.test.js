const makeGood = require("./1544.make-the-string-great");

test("Return the good string after the removing the bad strings", () => {
  expect(makeGood("leEeetcode")).toBe("leetcode");
});

test("Return an empty string if you can remove the whole string", () => {
  expect(makeGood("abBAcC")).toBe("");
});

test("Return the original string if the length of the string is one", () => {
  expect(makeGood("s")).toBe("s");
});

test("Return an empty string if the input s is an empty string", () => {
  expect(makeGood("")).toBe("");
});

test("Return the original string if the input s is already a good string", () => {
  expect(makeGood("leetcode")).toBe("leetcode");
});
