const minimumMoves = require("./2027.minimum-moves-to-convert-string");

test("Return the minimum number of moves required to convert all groups of three consecutive characters with 'X' into '0'", () => {
  expect(minimumMoves("XXX")).toBe(1);
});

test("Return 0 when str has no 'x' to convert", () => {
  expect(minimumMoves("OOOO")).toBe(0);
});

test("Return 0 when str is empty", () => {
  expect(minimumMoves("")).toBe(0);
});
