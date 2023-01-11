const shiftGrid = require("../jest-test/1260.shift-2d-grid");

test("Return the array after the shift operations", () => {
    expect(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1)).toEqual([[9,1,2],[3,4,5],[6,7,8]]);
});

test("Return the original 2D array if the argument k is 0", () => {
    expect(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 0)).toEqual([[1,2,3],[4,5,6],[7,8,9]]);
});