const isLongPressedName = require("./925.long-pressed-name");

test("Return true if typed is a long pressed name", () => {
  expect(isLongPressedName("alex", "aaleex")).toBeTruthy();
});

test("Return false iftyped is NOT a long pressed name", () => {
  expect(isLongPressedName("saeed", "ssaaedd")).toBeFalsy();
});

test("Return false if name is an empty string", () => {
  expect(isLongPressedName("", "aaleex")).toBeFalsy();
});

test("Return false if typed is an empty string", () => {
  expect(isLongPressedName("alex", "")).toBeFalsy();
});
