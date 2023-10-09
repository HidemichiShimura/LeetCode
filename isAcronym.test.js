const isAcronym = require("./2828.check-if-a-string-is-an-acronym-of-words");

test("Return true if the input s is an acronym of words", () => {
  expect(isAcronym(["alice", "bob", "charlie"], "abc")).toBeTruthy();
});

test("Return false if the input s is not an acronym of words", () => {
  expect(isAcronym(["an", "apple"], "a")).toBeFalsy();
});

test("Return false if words has non-empty elements and s is an empty string", () => {
  expect(isAcronym(["alice", "bob", "charlie"], "")).toBeFalsy();
});
