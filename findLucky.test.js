const findLucky = require("./1394.find-lucky-integer-in-an-array");

test("Return the largest lucky integer in the input arr", () => {
    expect(findLucky([1,2,2,3,3,3])).toBe(3);
});

test("Return -1 if lucky integers do not exist in the input arr", () => {
    expect(findLucky([2,2,2,3,3])).toBe(-1);
});

test("Return -1 if the input arr is empty", () => {
    expect(findLucky([])).toBe(-1);
});

test("Return -1 if the input arr has only Infinity", () => {
    expect(findLucky([Infinity,Infinity,Infinity])).toBe(-1);
});

test("Return -1 if the input arr has only -Infinity", () => {
    expect(findLucky([-Infinity,-Infinity,-Infinity])).toBe(-1);
});