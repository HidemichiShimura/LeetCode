import maximumUnits from "./maximumUnits";

describe("maximuxUnits module", () => {
  test("Return the maximum number of units loadable onto the truck", () => {
    expect(
      maximumUnits(
        [
          [1, 3],
          [2, 2],
          [3, 1],
        ],
        4
      )
    ).toBe(8);
  });
});
