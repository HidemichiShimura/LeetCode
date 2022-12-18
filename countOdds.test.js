const countOdds = require("./1523.count-odd-numbers-in-an-interval-range");

test("Return the count of odd numbers between low and high", () => {
    expect(countOdds(3,7)).toBe(3);
});

test("Return 0 if both low and high are 0", () => {
    expect(countOdds(0,0)).toBe(0);
});