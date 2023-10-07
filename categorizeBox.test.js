const categorizeBox = require("./2525.categorize-box-according-to-criteria");

test("Return Both if the box is both Bulky and Heavy", () => {
  expect(categorizeBox(10000, 1, 1, 100)).toBe("Both");
});

test("Return Bulky if the box is Bolky but not Heavy", () => {
  expect(categorizeBox(10000, 1, 1, 1)).toBe("Bulky");
});

test("Return Heavy if the box is Heavy but not Bulky", () => {
  expect(categorizeBox(1, 1, 1, 100)).toBe("Heavy");
});

test("Return Neigther if the box is neither Heavy nor Bulky", () => {
  expect(categorizeBox(1, 1, 1, 1)).toBe("Neither");
});
