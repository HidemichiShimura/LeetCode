const findSpecialInteger = require("./1287.element-appearing-more-than-25-in-sorted-array");

test("Return 6 if 6 appears 4 times in the array whose length is 10", () => {
    expect(findSpecialInteger([1,2,2,6,6,6,6,7,10])).toBe(6);
});

test("Return Infinity if the input array is empty", () => {
    expect(findSpecialInteger([])).toBe(Infinity);
});