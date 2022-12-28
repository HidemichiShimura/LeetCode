const fixedPoint = require("./1064.fixed-point");

test("Return the smallest index if it exists in the input arr", () => {
    expect(fixedPoint([-10,-5,0,3,7])).toBe(3);
});

test("Return -1 if an index that satisfies 'arr[i] == i' does not exist in the input arr", () => {
    expect(fixedPoint([-10,-5,0,3,7])).toBe(3);
});

test("Return -1 if the input arr is empty", () => {
    expect(fixedPoint([])).toBe(-1);
});

test("Return -1 if the input arr is made of Infinity", () => {
    expect(fixedPoint([Infinity, Infinity, Infinity])).toBe(-1);
});

test("Return -1 if the input arr is made of -Infinity", () => {
    expect(fixedPoint([-Infinity, -Infinity, -Infinity])).toBe(-1);
});