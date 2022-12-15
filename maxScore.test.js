const maxScore = require("./1422.maximum-score-after-splitting-a-string");

test("Return the maximum score", () => {
    expect(maxScore("011101")).toBe(5);
});

test("Return the maximum score of string which comprises only ones", () => {
    expect(maxScore("111111")).toBe(5);
});

test("Return the maximum score of string which comprises only zeroes", () => {
    expect(maxScore("000000")).toBe(5);
});