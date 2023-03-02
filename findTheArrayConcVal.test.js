const findTheArrayConcVal = require("./2562.find-the-array-concatenation-value");

test("Return the concatenation value of the nums", () => {
  expect(findTheArrayConcVal([7, 52, 2, 4])).toBe(596);
});

test("Return 0 if the nums is an empty array", () => {
  expect(findTheArrayConcVal([])).toBe(0);
});

test("Return 0 if the nums consists of zeros", () => {
  expect(findTheArrayConcVal([0, 0, 0, 0, 0])).toBe(0);
});
