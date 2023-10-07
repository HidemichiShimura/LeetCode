const search = require("./704.binary-search");

test("Return the index of target in nums", () => {
  expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
});

test("Return -1 if target does not exist in nums", () => {
  expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});

test("Return the index of target in nums when target is Infinity", () => {
  expect(search([-1, 0, 3, 5, 9, 12, Infinity], Infinity)).toBe(6);
});

test("Return the index of target in nums when target is -Infinity", () => {
  expect(search([-1, 0, 3, 5, 9, 12, -Infinity], -Infinity)).toBe(6);
});

test("Return -1 if nums is an empty array", () => {
  expect(search([], 9)).toBe(-1);
});
