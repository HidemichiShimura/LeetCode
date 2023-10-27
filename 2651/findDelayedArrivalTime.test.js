const findDelayedArrivalTime = require("./findDelayedArrivalTime");

test("Return the time when the train will arrive at the station", () => {
  expect(findDelayedArrivalTime(15, 5)).toBe(20);
});

test("Return the time when the train will arrive at the station which is 0 in the 24-hour format ", () => {
  expect(findDelayedArrivalTime(13, 11)).toBe(0);
});
