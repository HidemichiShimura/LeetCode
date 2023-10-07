const numberOfLines = require("./806.number-of-lines-to-write-string");

test("Return an array result where result[0] is the number of lines and result[1] is the width of the last line", () => {
  expect(
    numberOfLines(
      [
        10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        10, 10, 10, 10, 10, 10, 10, 10,
      ],
      "abcdefghijklmnopqrstuvwxyz"
    )
  ).toEqual([3, 60]);
});
