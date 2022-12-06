const mostFrequentEven = require("./2404.most-frequent-even-element");

test("Return the most frequent even element", () => {
    expect(mostFrequentEven([0,1,2,2,4,4,1])).toBe(2);
});

test("Return -1 if there is no even element", () => {
    expect(mostFrequentEven([29,47,21,41,13,37,25,7])).toBe(-1);
});

test("Return -1 if the input nums is empty", () => {
    expect(mostFrequentEven([])).toBe(-1);
});

test("Return -1 if the input nums contains only Infinity", () => {
    expect(mostFrequentEven([Infinity, Infinity, Infinity])).toBe(-1);
});

test("Return -1 if the input nums contains only -Infinity", () => {
    expect(mostFrequentEven([-Infinity, -Infinity, -Infinity])).toBe(-1);
});