const detectCapitalUse = require("./520.detect-capital");

test("Return true for the word with all capitalized chars", () => {
    expect(detectCapitalUse("USA")).toBeTruthy();
});

test("Return true for the word with all lower cased chars", () => {
    expect(detectCapitalUse("leetcode")).toBeTruthy();
});

test("Return true for the word with the first char capitalized and the rest lower cased", () => {
    expect(detectCapitalUse("Google")).toBeTruthy();
});

test("Return false for the word with both upper cased chars and lower cased chars", () => {
    expect(detectCapitalUse("FlaG")).toBeFalsy();
});

test("Return true if the word is empty", () => {
    expect(detectCapitalUse("")).toBeTruthy();
});