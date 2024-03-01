import isPossibleToSplit from "./isPossibleToSplit";

describe("Module: isPossibleToSplit", () => {
  it("returns true if the array is splittable", () => {
    expect(isPossibleToSplit([1, 1, 2, 2, 3, 4])).toBeTruthy();
  });
  it("returns false if the array is not splittable", () => {
    expect(isPossibleToSplit([1, 1, 1, 1])).toBeFalsy();
  });
});
