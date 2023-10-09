const strStr = require("./28.find-the-index-of-the-first-occurrence-in-a-string");

test("Return the first index of needle in haystack", () => {
  expect(strStr("sadbutsad", "sad")).toBe(0);
});

test("Return -1 if needle does not exist in haystack", () => {
  expect(strStr("leetcode", "leeto")).toBe(-1);
});

test("Return 0 if needle is an empty string", () => {
  expect(strStr("sadbutsad", "")).toBe(0);
});
