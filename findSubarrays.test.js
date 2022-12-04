const findSubarrays = require("./2395.find-subarrays-with-equal-sum");

test("Return true if two subarrays of length 2 with equal sum exist in the input nums", () => {
    expect(findSubarrays([4,2,4])).toBeTruthy();
});

test("Return false if two subarrays of length 2 with equal sum do not exist in the input nums", () => {
    expect(findSubarrays([1,2,3,4,5])).toBeFalsy();
});

test("Return true if the input nums contains only zero", () => {
    expect(findSubarrays([0,0,0])).toBeTruthy();
});

test("Return false if the length of the input nums is less than 2", () => {
    expect(findSubarrays([0])).toBeFalsy();
});

test("Return true if the input nums contains only Infinity", () => {
    expect(findSubarrays([Infinity, Infinity, Infinity])).toBeTruthy();
});

test("Return true if the input nums contains only -Infinity", () => {
    expect(findSubarrays([-Infinity, -Infinity, -Infinity])).toBeTruthy();
});