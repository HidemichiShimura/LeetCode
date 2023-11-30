import distanceTraveled from "./distanceTraveled";

describe("distanceTraveled module ", () => {
  test("Return the maximum distance which can be traveled", () => {
    expect(distanceTraveled(5, 10)).toBe(60);
  });
  test("Return the maximum distance with no mileage from addtionalTank", () => {
    expect(distanceTraveled(1, 2)).toBe(10);
  });
  test("Return 0 for the empty mainTank", () => {
    expect(distanceTraveled(0, 2)).toBe(0);
  });
  test("Return the maximum distance with no mileage from an empty addtionalTank", () => {
    expect(distanceTraveled(10, 0)).toBe(100);
  });
});
