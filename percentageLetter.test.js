const percentageLetter = require("./2278.percentage-of-letter-in-string");

test("Return 33 s = 'foobar' and letter = 'o'", () => {
    expect(percentageLetter("foobar", "o")).toBe(33);
});

test("Return 0 if there is not any of the letter in the string", () => {
    expect(percentageLetter("jjjj", "k")).toBe(0);
});

test("Return NaN if the string is empty", () => {
    expect(percentageLetter("", "k")).toBeNaN();
});