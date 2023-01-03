const isConsecutive = require("./2229.check-if-an-array-is-consecutive");

test("Return true if the input nums contains all the integers in the range", () => {
    expect(isConsecutive([1,3,4,2])).toBeTruthy();
});

test("Return false if the input nums misses any integer in the range", () => {
    expect(isConsecutive([1,3])).toBeFalsy();
});

test("Return false if the input nums contains Infinity", () => {
    expect(isConsecutive([1,3,4,2,Infinity])).toBeFalsy();
});