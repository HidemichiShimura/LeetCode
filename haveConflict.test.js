const haveConflict = require("./2446.determine-if-two-events-have-conflict");

test("Return true when event1 and event2 have a confilct, some non-empty intersection", () => {
  expect(haveConflict(["01:15", "02:00"], ["02:00", "03:00"])).toBeTruthy();
});

test("Return false when event1 and event2 have no conflict", () => {
  expect(haveConflict(["10:00", "11:00"], ["14:00", "15:00"])).toBeFalsy();
});
