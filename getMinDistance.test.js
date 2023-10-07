const getMinDistance = require("./1848.minimum-distance-to-the-target-element");

/* The index i restriction:
 *
 * 1. nums[i] == target
 * 2. abs(i - start) is minimized
 */

test("Return the absolute value of abs(i - start)", () => {
  expect(getMinDistance([1, 2, 3, 4, 5], 5, 3)).toBe(1);
});

test("Return 0 if the absolute value of abs(i - start)", () => {
  expect(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0)).toBe(0);
});
