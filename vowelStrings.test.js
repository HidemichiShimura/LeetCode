const vowelStrings = require("./2586.count-the-number-of-vowel-strings-in-range");

test("Return the number of vowel strings", () => {
  expect(vowelStrings(["are", "amy", "u"], 0, 2)).toBe(2);
});

test("Return 0 if there is no vowel strings in the inclusive range of left and right", () => {
  expect(vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 0, 0)).toBe(0);
});

test("Return 0 if the range is out of indices of words, which right is less than 0", () => {
  expect(vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 0, -1)).toBe(0);
});
