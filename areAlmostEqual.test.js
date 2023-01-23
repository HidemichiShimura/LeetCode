const areAlmostEqual = require("./1790.check-if-one-string-swap-can-make-strings-equal");

test("Return true if s1 and s2 can become equal at one character swap", () => {
  expect(areAlmostEqual("bank", "kanb")).toBeTruthy();
});

test("Return true if s1 and s2 are equal without character swapping", () => {
  expect(areAlmostEqual("kelb", "kelb")).toBeTruthy();
});

test("Return false if s1 and s2 contain different characters", () => {
  expect(areAlmostEqual("attack", "defend")).toBeFalsy();
});

test("Return false if s1 and s2 contain different characters", () => {
  expect(areAlmostEqual("attack", "defend")).toBeFalsy();
});

test("Return false if s1 and s2 need more than one character swap to become equal", () => {
  expect(areAlmostEqual("attack", "tatakc")).toBeFalsy();
});
