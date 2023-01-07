const findMaxK = require("./2441.largest-positive-integer-that-exists-with-its-negative");

test("Return the largest positive integer k such that -k also exists in the array", () => {
    expect(findMaxK([-1,2,-3,3])).toBe(3);
});

test("Return -1 if there is no such a positive integer k that -k also exists in the array", () => {
    expect(findMaxK([-10,8,6,7,-2,-3])).toBe(-1);
});

test("Return Infinity if the array contains Infinity and -Infinity", () => {
    expect(findMaxK([Infinity, -Infinity])).toBe(Infinity);
});

test("Return 0 if the array contains only zeroes", () => {
    expect(findMaxK([0,0])).toBe(0);
});