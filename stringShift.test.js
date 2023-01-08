const stringShift = require("./1427.perform-string-shifts");

test("Return the final string after the shift operations", () => {
    expect(stringShift("abcdefg", [[1,1],[1,1],[0,2],[1,3]])).toBe("efgabcd");
});

test("Return an empty string if the input string is empty", () => {
    expect(stringShift("", [[1,1],[1,1],[0,2],[1,3]])).toBe("");
});

test("Return the original string if the input shift has no element", () => {
    expect(stringShift("abcdefg", [])).toBe("abcdefg");
});

test("Return the original string if all of the shift amounts are 0", () => {
    expect(stringShift("abcdefg", [[1,0],[0,0],[0,0],[1,0]])).toBe("abcdefg");
});