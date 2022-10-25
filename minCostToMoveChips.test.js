const minCostToMoveChips = require("./1217.minimum-cost-to-move-chips-to-the-same-position");

test("Return 1 if there are two chips at odd indices and one at even indices", () => {
    expect(minCostToMoveChips([1,2,3])).toBe(1);
});

test("Return 2 because there are three chips at even indices and two at odd indices", () => {
    expect(minCostToMoveChips([2,2,2,3,3])).toBe(2);
});

test("Return 0 if all the chips are at odd indices", () => {
    expect(minCostToMoveChips([1,3,5,7])).toBe(0);
});

test("Return 0 if all the chips are at even indices", () => {
    expect(minCostToMoveChips([2,4,6,8])).toBe(0);
});