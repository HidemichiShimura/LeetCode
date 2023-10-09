const findNonMinOrMax = require("./2733.neither-minimum-nor-maximum");

test("Return the min-nor-max value", () => {
  expect(findNonMinOrMax([3, 2, 1, 4])).toBe(2);
});

test("Return -1 if there is no min-nor-max value", () => {
  expect(findNonMinOrMax([1, 2])).toBe(-1);
});

test("Return -1 if nums is an empty array", () => {
  expect(findNonMinOrMax([])).toBe(-1);
});
