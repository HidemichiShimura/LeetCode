const canAttendMeetings = require("../jest-test/252.meeting-rooms");

test("Return a person can attend all meetings", () => {
  expect(
    canAttendMeetings([
      [7, 10],
      [2, 4],
    ])
  ).toBeTruthy();
});

test("Return false if any start time and end time overlap", () => {
  expect(
    canAttendMeetings([
      [0, 30],
      [5, 10],
      [15, 20],
    ])
  ).toBeFalsy();
});

test("Return false if there is Infinty at the end of the interval in the array", () => {
  expect(
    canAttendMeetings([
      [7, 10],
      [2, Infinity],
    ])
  ).toBeFalsy();
});
