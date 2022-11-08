const countGoodSubstrings = require("./1876.substrings-of-size-three-with-distinct-characters");

test("Return 1 if there is 1 good substring", () => {
    expect(countGoodSubstrings("xyzzaz")).toBe(1);
});

test("Return 0 if there is no good substring", () => {
    expect(countGoodSubstrings("zzzzzz")).toBe(0);
});

test("Return 0 if the input string is empty", () => {
    expect(countGoodSubstrings("zzzzzz")).toBe(0);
});