const canBeIncreasing = require("./1909.remove-one-element-to-make-the-array-strictly-increasing");

test("Return true if the input array of integers can be strictly increasing by removing one element", () => {
    expect(canBeIncreasing([1,2,10,5,7])).toBeTruthy();
});

test("Return false if the input array of integers can not be strictly increasing by removing one element", () => {
    expect(canBeIncreasing([2,3,1,2])).toBeFalsy();
});

test("Return true if the input array has two elements", () => {
    expect(canBeIncreasing([1,2])).toBeTruthy();
});

test("Return true if the input array has one element", () => {
    expect(canBeIncreasing([1])).toBeTruthy();
});

test("Return false if the input array is empty", () => {
    expect(canBeIncreasing([])).toBeFalsy();
});