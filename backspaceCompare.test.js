const backspaceCompare = require("./844.backspace-string-compare");

test("Return true if they are equal when both are typed into empty text editors", () => {
  expect(backspaceCompare("ab#c", "ad#c")).toBeTruthy();
});

test("Return true if both consist of backspace", () => {
  expect(backspaceCompare("#####", "###")).toBeTruthy();
});

test("Return false if they are not equal when both are typed into empty text editors", () => {
  expect(backspaceCompare("a#c", "b")).toBeFalsy();
});
