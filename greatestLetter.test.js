const greatestLetter = require("./2309.greatest-english-letter-in-upper-and-lower-case");

test("Return the greatest English letter which occurs as both a lowercase and uppercase letter in s", () => {
    expect(greatestLetter("lEeTcOdE")).toBe("E");
});

test("Return an empty string if theres is not an English letter which occurs as both a lowercase and uppercase letter in s", () => {
    expect(greatestLetter("AbCdEfGhIjK")).toBe("");
});

test("Return an empty string if the input s is emtpy", () => {
    expect(greatestLetter("")).toBe("");
});