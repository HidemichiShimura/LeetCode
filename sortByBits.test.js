const sortByBits = require("./1356.sort-integers-by-the-number-of-1-bits");

test("Return the array after sorting by the number of 1 in their binary representations", () => {
  expect(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8])).toEqual([
    0, 1, 2, 4, 8, 3, 5, 6, 7,
  ]);
});

test("Return the array after sorting in ascending order if all the integers in the array has the same number of 2 in their binary representations", () => {
  expect(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1])).toEqual([
    1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024,
  ]);
});
