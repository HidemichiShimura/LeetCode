const furthestDistanceFromOrigin = require("./2833.furthest-point-from-origin");

test("Return the distance from the origin of the furthest point", () => {
  expect(furthestDistanceFromOrigin("L_RL__R")).toBe(3);
});

test("Return the distance from the origin of the furthest point when the string moves has only _", () => {
  expect(furthestDistanceFromOrigin("_______")).toBe(7);
});

test("Return 0 when the string moves is an empty ", () => {
  expect(furthestDistanceFromOrigin("")).toBe(0);
});
