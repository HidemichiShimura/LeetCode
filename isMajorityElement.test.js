const isMajorityElement = require("./1150.check-if-a-number-is-majority-element-in-a-sorted-array");

test("Return true if target is a major element in nums", () => {
    expect(isMajorityElement([2,4,5,5,5,5,5,6,6], 5)).toBeTruthy();
});

test("Return false if target is not a major element inn nums", () => {
    expect(isMajorityElement([10,100,101,101], 101)).toBeFalsy();
});

test("Return false if nums is an empty array", () => {
    expect(isMajorityElement([], 5)).toBeFalsy();
});