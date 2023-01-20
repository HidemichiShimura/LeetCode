const dominantIndex = require("./747.largest-number-at-least-twice-of-others");

test("Return the index of the largest number in the array", () => {
  expect(dominantIndex([3, 6, 1, 0])).toBe(1);
});

test("Return -1 if the largest integer is not at least twice as much as every other number in the array", () => {
  expect(dominantIndex([1, 2, 3, 4])).toBe(-1);
});

test("Return -1 if the array is empty", () => {
  expect(dominantIndex([])).toBe(-1);
});

test("Return -1 if the array is empty", () => {
  expect(dominantIndex([])).toBe(-1);
});

test("Return the index of Infinity in the array if there is", () => {
  expect(dominantIndex([3, 6, 1, 0, Infinity])).toBe(4);
});

test("Return the index of the largest number in the array with -Infinity", () => {
  expect(dominantIndex([3, 6, 1, 0, -Infinity])).toBe(1);
});
