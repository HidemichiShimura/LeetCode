const isIsomorphic = require("./205.isomorphic-strings");

test("Return true if s and t are isomorphic", () => {
  expect(isIsomorphic("egg", "add")).toBeTruthy();
});

test("Return false if s and t are not isomorphic", () => {
  expect(isIsomorphic("foo", "bar")).toBeFalsy();
});

test("Return false if the lengths of s and t are different", () => {
  expect(isIsomorphic("paper", "tit")).toBeFalsy();
});
