const specialArray = require("./1608.special-array-with-x-elements-greater-than-or-equal-x");

test("Return x is if the array is special", () => {
    expect(specialArray([3,5])).toBe(2);
});

test("Return -1 is if the array is not special", () => {
    expect(specialArray([0,0])).toBe(-1);
});

test("Return -1 is if the array is empty", () => {
    expect(specialArray([3,5])).toBe(2);
});

test("Return 1 is if the array has only one of Infinity", () => {
    expect(specialArray([Infinity])).toBe(1);
});