const matrixReshape = require("./566.reshape-the-matrix");

test("Return the reshaped matrix", () => {
  expect(
    matrixReshape(
      [
        [1, 2],
        [3, 4],
      ],
      1,
      4
    )
  ).toEqual([[1, 2, 3, 4]]);
});

test("Return the original matrix if the reshape operations is unavailable", () => {
  expect(
    matrixReshape(
      [
        [1, 2],
        [3, 4],
      ],
      2,
      4
    )
  ).toEqual([
    [1, 2],
    [3, 4],
  ]);
});

test("Return the original matrix if r is 0 and the reshape operations is unavailable", () => {
  expect(
    matrixReshape(
      [
        [1, 2],
        [3, 4],
      ],
      0,
      4
    )
  ).toEqual([
    [1, 2],
    [3, 4],
  ]);
});

test("Return the original matrix if c is 0 and the reshape operations is unavailable", () => {
  expect(
    matrixReshape(
      [
        [1, 2],
        [3, 4],
      ],
      1,
      0
    )
  ).toEqual([
    [1, 2],
    [3, 4],
  ]);
});
