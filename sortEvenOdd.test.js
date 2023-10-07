const sortEvenOdd = require("./2164.sort-even-and-odd-indices-independently");

test("Return the array formed after rearranging the values", () => {
  expect(sortEvenOdd([4, 1, 2, 3])).toEqual([2, 3, 4, 1]);
});

test("Return the array formed after rearranging the values when nums's length is odd", () => {
  expect(sortEvenOdd([4, 1, 2, 3, 5])).toEqual([2, 3, 4, 1, 5]);
});

test("Return an empty array if nums is empty", () => {
  expect(sortEvenOdd([])).toEqual([]);
});
