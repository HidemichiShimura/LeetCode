const reformat = require("./1417.reformat-the-string");

test("Return a permutated string if the input string has the same number of digits and alphabets", () => {
    expect(reformat("a0b1c2")).toBe("0a1b2c");
});

test("Return a permutated string if the input string has more digits than alphabets by one", () => {
    expect(reformat("a0b1c22")).toBe("0a1b2c2");
});

test("Return a permutated string if the input string has more alphabets than digits by one", () => {
    expect(reformat("a0b1cc2")).toBe("a0b1c2c");
});

test("Return an empty string if the input string has only alphabets", () => {
    expect(reformat("leetcode")).toBe("");
});

test("Return an empty string if the input string has only digits", () => {
    expect(reformat("1229857369")).toBe("");
});