const minNumberOfHours = require("./2383.minimum-hours-of-training-to-win-a-competition");

test("Return the minimum number of training hours required to defeat all the opponents.", () => {
  expect(minNumberOfHours(5, 3, [1, 4, 3, 2], [2, 6, 3, 1])).toBe(8);
});

test("Return 0 if no training hours are required", () => {
  expect(minNumberOfHours(2, 4, [1], [3])).toBe(0);
});

test("Return 0 if energy and experience are Infinity", () => {
  expect(minNumberOfHours(Infinity, Infinity, [1, 4, 3, 2], [2, 6, 3, 1])).toBe(
    0
  );
});
