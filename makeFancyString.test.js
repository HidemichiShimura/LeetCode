const makeFancyString = require("./1957.delete-characters-to-make-fancy-string");

test("Return the final string after deleting some chars so that there is three consecutive chars that are equal", () => {
  expect(makeFancyString("leeetcode")).toBe("leetcode");
});

test("Return the original string if there is no three consecutive chars that are equal", () => {
  expect(makeFancyString("aab")).toBe("aab");
});

test("Return an empty string if the input stirng is empty", () => {
  expect(makeFancyString("")).toBe("");
});
