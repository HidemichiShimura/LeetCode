const maxLengthBetweenEqualCharacters = require("./1624.largest-substring-between-two-equal-characters");

test("Return the length of the longest substring between two equal characters", () => {
  expect(maxLengthBetweenEqualCharacters("abca")).toBe(2);
});

test("Return 0 if the only two equal characters are adjacent", () => {
  expect(maxLengthBetweenEqualCharacters("aa")).toBe(0);
});

test("Return -1 if there are no two equal characters", () => {
  expect(maxLengthBetweenEqualCharacters("cbzxy")).toBe(-1);
});

test("Return -1 if the input string is empty", () => {
  expect(maxLengthBetweenEqualCharacters("")).toBe(-1);
});
