const countBeautifulPairs = require("./countBeautifulPairs");

test("Return the number of beautiful pairs in the array nums", () => {
  expect(countBeautifulPairs([11, 21, 12])).toBe(2);
});

test("Return 0 if the array nums is empty", () => {
  expect(countBeautifulPairs([])).toBe(0);
});
