const isMonotonic = require("./896.monotonic-array");

test("Return true if the input nums is monotone increasing", () => {
    expect(isMonotonic([1,2,2,3])).toBeTruthy();
});

test("Return true if the input nums is monotone decreasing", () => {
    expect(isMonotonic([6,5,4,4])).toBeTruthy();
});

test("Return false if the input nums is not monotone increasing and monotone decreasing", () => {
    expect(isMonotonic([1,3,2])).toBeFalsy();
});