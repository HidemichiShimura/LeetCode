const countVowelSubstrings = require("./2062.count-vowel-substrings-of-a-string");

test("Return the number of vowel substrings in word", () => {
  expect(countVowelSubstrings("aeiouu")).toBe(2);
});

test("Return 0 if there is no vowel substrings in word", () => {
  expect(countVowelSubstrings("unicornarihan")).toBe(0);
});

test("Return 0 if the length of word is less than 5", () => {
  expect(countVowelSubstrings("ihan")).toBe(0);
});

test("Return 0 if word is a empty string", () => {
  expect(countVowelSubstrings("")).toBe(0);
});
