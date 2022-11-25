const countElements = require("./2148.count-elements-with-strictly-smaller-and-greater-elements");

test("Return the number of elements that have both a strictly smaller and a strictly greater element appear in the input nums", () => {
    expect(countElements([11,7,2,15])).toBe(2);
});

test("Return 0 if there is no element that have both a strictly smaller and a strictly greater element appear in the input nums", () => {
    expect(countElements([11,11,15,15])).toBe(0);
});

test("Return 0 if the input nums is empty", () => {
    expect(countElements([])).toBe(0);
});
