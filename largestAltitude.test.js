const largestAltitude = require("./1732.find-the-highest-altitude");

test("Return the highest altitude", () => {
    expect(largestAltitude([-5,1,5,0,-7])).toBe(1);
});

test("Return 0 if all the net gain are less than or equal to 0 ", () => {
    expect(largestAltitude([-4,-3,-2,-1,4,3,2])).toBe(0);
});

test("Return Infinity if the input gain contain Infinity", () => {
    expect(largestAltitude([Infinity])).toEqual(Infinity);
});

test("Return -Infinity if the input gain contain -Infinity", () => {
    expect(largestAltitude([-Infinity])).toBe(0);
});