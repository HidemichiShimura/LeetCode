const findMiddleIndex = require("./1991.find-the-middle-index-in-array");

test("Return the middleIndex if there is", () => {
  expect(findMiddleIndex([2, 3, -1, 8, 4])).toBe(3);
});

test("Return -1 if there is no middleIndex", () => {
  expect(findMiddleIndex([2, 5])).toBe(-1);
});

test("Return -1 if nums is an empty array", () => {
  expect(findMiddleIndex([])).toBe(-1);
});
