const nextGreatestLetter = require("../problem/744.find-smallest-letter-greater-than-target");

test("Return the smallest character that is lexicographically greater than target", () => {
    expect(nextGreatestLetter(["c","f","j"], "a")).toBe("c");
});

test("Return the first character if the smallest character that is lexicographically greater than target does not exist", () => {
    expect(nextGreatestLetter(["x","x","y","y"], "z")).toBe("x");
});

test("Return undefined if letters is empty", () => {
    expect(nextGreatestLetter([], "a")).toBeUndefined();
});

test("Return the first character if target is empty", () => {
    expect(nextGreatestLetter(["c","f","j"], "")).toBe("c");
});