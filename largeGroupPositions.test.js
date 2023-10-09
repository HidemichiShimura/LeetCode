const largeGroupPositions = require("./830.positions-of-large-groups");

test("Return the intervals of group that has 3 or more than 3 elements", () => {
  expect(largeGroupPositions("abbxxxxzzy")).toBe([[3, 6]]);
});

test("Return the intervals of group that has 3 or more than 3 elements in increasing order by start index.", () => {
  expect(largeGroupPositions("abcdddeeeeaabbbcd")).toBe([
    [3, 5],
    [6, 9],
    [12, 14],
  ]);
});

test("Return an epmty array if there is no valid gropd in the string s", () => {
  expect(largeGroupPositions("abc")).toBe([]);
});
