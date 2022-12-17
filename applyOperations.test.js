const applyOperations = require("./2460.apply-operations-to-an-array");

test("Return the resulting array after the operation are applied and all zeroes are shifted to the end", () => {
    expect(applyOperations([1,2,2,1,1,0])).toEqual([1,4,2,0,0,0]);
});

test("Return the resulting array after all zeroes are shifted to the end", () => {
    expect(applyOperations([0,1])).toEqual([1,0]);
});

test("Return an array whose elements are all zeroes if the input array consists of zeroes", () => {
    expect(applyOperations([0,0,0])).toEqual([0,0,0]);
});