const isDecomposable = require("./1933.check-if-string-is-decomposable-into-value-equal-substrings");

test("Return true if the digit string can be decomposed to one group whose length is two and the others whose length are three.", () => {
  expect(isDecomposable("00011111222")).toBeTruthy();
});

test("Return false if the digit string cannot be decomposed to one group whose length is two", () => {
  expect(isDecomposable("000111000")).toBeFalsy();
});

test("Return false if there is the digit substirng whose lenght is less than 1 after decomposing", () => {
  expect(isDecomposable("011100022233")).toBeFalsy();
});

test("Return false if the digit stirng is empty", () => {
  expect(isDecomposable("")).toBeFalsy();
});
