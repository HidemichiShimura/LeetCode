const mergeAlternately = require("./1768.merge-strings-alternately");

test("Return the merged string after sorting in alternating order", () => {
  expect(mergeAlternately("abc", "pqr")).toBe("apbqcr");
});

test("Return the merged string after sorting in alternating order when word1 has more letters than word2", () => {
  expect(mergeAlternately("abcd", "pq")).toBe("apbqcd");
});

test("Return the merged string after sorting in alternating order when word2 has more letters than word1", () => {
  expect(mergeAlternately("ab", "pqrs")).toBe("apbqrs");
});

test("Return the merged string when word1 is an empty string", () => {
  expect(mergeAlternately("", "pqr")).toBe("pqr");
});

test("Return the merged string when word2 is an empty string", () => {
  expect(mergeAlternately("abc", "")).toBe("abc");
});
