import findWordsContaining from "./findWordsContaining";

describe("findWordsContaining module", () => {
  // True case
  test("Return an array of indices of word with x", () => {
    expect(findWordsContaining(["leet", "code"], "e")).toEqual([0, 1]);
  });

  // False cases
  test("Return an empty array if there is no word with x", () => {
    expect(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z")).toEqual([]);
  });
  test("Return an empty array if there is no word with x", () => {
    expect(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z")).toEqual([]);
  });
  test("Return an empty array if no word exists in words", () => {
    expect(findWordsContaining([], "z")).toEqual([]);
  });
  test("Return an empty array if every word is an empty string", () => {
    expect(findWordsContaining(["", "", ""], "z")).toEqual([]);
  });
});
