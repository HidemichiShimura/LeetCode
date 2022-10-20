const sortedSquares = require("./977.squares-of-a-sorted-array");

test("Include no elements", () => {
    expect(sortedSquares([])).toEqual([]);
});

test("Include positive numbers and negative numbers", () => {
    expect(sortedSquares([1,-9,3,-15])).toEqual([1,9,81,225]);
});

test("Include only negative numbers", () => {
    expect(sortedSquares([-1,-9,-3,-15])).toEqual([1,9,81,225]);
});

test("Include Infinity", () => {
    expect(sortedSquares([-1,-9,-3,Infinity])).toEqual([1,9,81,Infinity]);
});

test("Include -Infinity", () => {
    expect(sortedSquares([-1,-9,-3,-Infinity])).toEqual([1,9,81,Infinity]);
});