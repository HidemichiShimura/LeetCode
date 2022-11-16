const countElements = require("./1426.counting-elements");

test("Return 2 if there are 2 pairs of an element and the element + 1 in the input array", () => {
    expect(countElements([1,2,3])).toBe(2);
});

test("Return 0 if there is no pair of an element and the element + 1 in the input array", () => {
    expect(countElements([1,1,3,3,5,5,7,7])).toBe(0);
});