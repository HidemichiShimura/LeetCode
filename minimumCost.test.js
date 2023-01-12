const minimumCost = require("../jest-test/2144. minimum-cost-of-buying-candies-with-discount");

test("Return the minimum cost of buying all the candies", () => {
    expect(minimumCost([6,5,7,9,2,2])).toBe(23);
});

test("Return the sum of the element values if the input cost has only 2 elements", () => {
    expect(minimumCost([1,2])).toBe(3);
});

test("Return the element value if the input cost has only 1 element", () => {
    expect(minimumCost([1])).toBe(1);
});

test("Return 0 if the input cost has no element", () => {
    expect(minimumCost([])).toBe(0);
});

test("Return Infinity if the input cost has Infinity", () => {
    expect(minimumCost([6,5,7,9,2,2,Infinity])).toBe(Infinity);
});

test("Return -Infinity if the input cost has -Infinity and it does not become free for a third candy", () => {
    expect(minimumCost([6,5,7,9,2,2,-Infinity])).toBe(-Infinity);
});

test("Return -Infinity if the input cost has -Infinity but it becomes free for a third candy", () => {
    expect(minimumCost([6,5,7,9,2,-Infinity])).toBe(23);
});