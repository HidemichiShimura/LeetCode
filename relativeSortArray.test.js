const relativeSortArray = require("./1122.relative-sort-array");

test("Return the array sorted in a relative order", () => {
  expect(
    relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
  ).toEqual([2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]);
});

test("Return the array with Infinity sorted in a relative order", () => {
  expect(
    relativeSortArray(
      [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19, Infinity],
      [2, 1, 4, 3, 9, 6, Infinity]
    )
  ).toEqual([2, 2, 2, 1, 4, 3, 3, 9, 6, Infinity, 7, 19]);
});

test("Return the array with -Infinity sorted in a relative order", () => {
  expect(
    relativeSortArray(
      [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19, -Infinity],
      [2, 1, 4, 3, 9, 6, -Infinity]
    )
  ).toEqual([2, 2, 2, 1, 4, 3, 3, 9, 6, -Infinity, 7, 19]);
});

test("Return an empty array when both arguments are empty ", () => {
  expect(relativeSortArray([], [])).toEqual([]);
});
