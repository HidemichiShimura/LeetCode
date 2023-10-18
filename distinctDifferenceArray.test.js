const distinctDifferenceArray = require("./2670.find-the-distinct-difference-array");

test("Return the distinct difference array of nums", () => {
  expect(distinctDifferenceArray([1, 2, 3, 4, 5])).toBeEqual([-3, -1, 1, 3, 5]);
});

test("Return an empty array if the array nums is empty", () => {
  expect(distinctDifferenceArray([])).toBeEqual([]);
});
