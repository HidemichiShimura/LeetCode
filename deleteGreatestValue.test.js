const deleteGreatestValue = require("./2500.delete-greatest-value-in-each-row");

test("Return the answer after performing the operations", () => {
  expect(
    deleteGreatestValue([
      [1, 2, 4],
      [3, 3, 1],
    ])
  ).toBe(8);
});

test("Return 0 if the input is an empty 2D array", () => {
  expect(deleteGreatestValue([[]])).toBe(0);
});

test("Return Infinity if an array in grid contains Infinity", () => {
  expect(
    deleteGreatestValue([
      [1, 2, Infinity],
      [3, 3, 1],
    ])
  ).toBe(Infinity);
});
