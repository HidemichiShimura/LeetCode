const minimumRecolors = require("./2379.minimum-recolors-to-get-k-consecutive-black-blocks");

test("Return the minimum number of operations to get one occurrence of k consecutive black blocks", () => {
  expect(minimumRecolors("WBBWWBBWBW", 7)).toBe(3);
});

test("Return 0 if there is already at least one of k consecutive black blocks", () => {
  expect(minimumRecolors("WBWBBBW", 2)).toBe(0);
});
