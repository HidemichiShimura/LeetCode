const distinctAverages = require("./2465.number-of-distinct-averages");

test("Return 2 if there are two distinct average numbers", () => {
    expect(distinctAverages([4,1,4,0,3,5])).toBe(2);
});

test("Return 0 if the input array has no element", () => {
    expect(distinctAverages([])).toBe(0);
});