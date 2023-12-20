import buyChoco from "./buyChoco";

describe("buyChoco module", () => {
  test("Return 0 if the price sum of purchased chocolate is equal to money", () => {
    expect(buyChoco([1, 2, 2], 3)).toBe(0);
  });
  test("Return money if the price sum of purchased chocolate is more than money", () => {
    expect(buyChoco([3, 2, 3], 3)).toBe(3);
  });
});
