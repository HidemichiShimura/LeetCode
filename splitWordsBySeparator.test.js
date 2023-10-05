const splitWordsBySeparator = require("./2788.split-strings-by-separator");

test("Return an array of string split by separator", () => {
  expect(
    splitWordsBySeparator(["one.two.three", "four.five", "six"], ".")
  ).toEqual(["one", "two", "three", "four", "five", "six"]);
});

test("Return an empty array if no word that can be split by separator exists", () => {
  expect(splitWordsBySeparator(["|||"], "|")).toEqual([]);
});

test("Return an empty array if words is empty", () => {
  expect(splitWordsBySeparator([])).toEqual([]);
});
