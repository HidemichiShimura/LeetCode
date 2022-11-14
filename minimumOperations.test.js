const minimumOperations = require("./2357.make-array-zero-by-subtracting-equal-amounts");

test("Return the minimum number of operations if the input array of integers has a positive element", () => {
    expect(minimumOperations([1,5,0,3,5])).toBe(3);
});

test("Return 0 if the input array of integers has only 0", () => {
    expect(minimumOperations([0])).toBe(0);
});

test("Return 0 if the input array of integers is empty", () => {
    expect(minimumOperations([])).toBe(0);
});