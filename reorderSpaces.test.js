const reorderSpaces = require("./1592.rearrange-spaces-between-words");

test("Return the string after inserting the maximumized equal number of spaces between words", () => {
  expect(reorderSpaces("  this   is  a sentence ")).toBe(
    "this   is   a   sentence"
  );
});

test("Return the string after inserting the maximumized equal number of spaces between words with extra spaces at the end", () => {
  expect(reorderSpaces(" practice   makes   perfect")).toBe(
    "practice   makes   perfect "
  );
});

test("Return the string with all the spaces at the end if there is only one word in text", () => {
  expect(reorderSpaces("  hello")).toBe("hello  ");
});

test("Return the original string if there is no space in text", () => {
  expect(reorderSpaces("hello")).toBe("hello");
});

test("Return the string of all the spaces if text consists only of spaces", () => {
  expect(reorderSpaces("     ")).toBe("     ");
});

test("Return an empty string if text is empty", () => {
  expect(reorderSpaces("")).toBe("");
});
