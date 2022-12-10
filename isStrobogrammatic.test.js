const isStrobogrammatic = require("./246.strobogrammatic-number");

test("Return true if the input num is a strobogrammatic number", () => {
    expect(isStrobogrammatic("69")).toBeTruthy();
});

test("Return false if the input num contains a non-strobogrammatic number", () => {
    expect(isStrobogrammatic("962")).toBeFalsy();
});

test("Return true if the input num has a leading zero after rotated", () => {
    expect(isStrobogrammatic("690")).toBeFalsy();
});
