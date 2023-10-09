const maximumTime = require("./1736.latest-time-by-replacing-hidden-digits");

test("Return the latest valid time if the first digit of hour is hidden and the second digit is less than 4", () => {
  expect(maximumTime("?3:00")).toBe("23:00");
});

test("Return the latest valid time from the time where the first digit of hour is hidden and the second digit is greater than 3", () => {
  expect(maximumTime("?4:00")).toBe("14:00");
});

test("Return the latest valid time from the time where the first digit of minute is hidden", () => {
  expect(maximumTime("23:?0")).toBe("23:50");
});

test("Return the latest valid time from the time where the second digit of minute is hidden", () => {
  expect(maximumTime("23:5?")).toBe("23:59");
});

test("Return the latest valid time from the time where all the digits are hidden", () => {
  expect(maximumTime("??:??")).toBe("23:59");
});
