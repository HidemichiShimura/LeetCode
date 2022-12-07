const wordPattern = require("./290.word-pattern");

test("Return true if the string follows the pattern", () => {
    expect(wordPattern("abba", "dog cat cat dog")).toBeTruthy();
});

test("Return false if the string does not follow the pattern", () => {
    expect(wordPattern("abba", "dog cat cat fish")).toBeFalsy();
});

test("Return false if the number of unique patterns does not match the number of unique words", () => {
    expect(wordPattern("aaaa", "dog cat cat dog")).toBeFalsy();
});

test("Return false if the pattern is empty", () => {
    expect(wordPattern("", "dog cat cat dog")).toBeFalsy();
});

test("Return false if the string is empty", () => {
    expect(wordPattern("abba", "")).toBeFalsy();
});