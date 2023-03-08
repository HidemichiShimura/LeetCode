const countTime = require("./2437.number-of-valid-clock-times");

test("Return the number of valid clock times that can be created by replacing every ? with a digit from 0 to 9", () => {
  expect(countTime("?5:00")).toBe(2);
});

test("Return the number of valid clock times after replacing ? when there are ? in the hour and the minute", () => {
  expect(countTime("0?:0?")).toBe(100);
});

test("Return the number of all the valid clock times if the all the times are represented with ?", () => {
  expect(countTime("??:??")).toBe(1440);
});
