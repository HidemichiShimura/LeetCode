const minLength = require("./minLength");

test("Return the minimum possible length of the resulting string", () => {
  expect(minLength("ABFCACDB")).toBe(2);
});

test("Return the length of the string s if it has no 'A', B', 'C' or 'D'", () => {
  expect(minLength("GTFVVNL")).toBe(7);
});

test("Return the length of the string s if it has no consecutive 'AB' or 'CD'", () => {
  expect(minLength("ATBVCND")).toBe(7);
});

test("Return 0 if the string s is empty", () => {
  expect(minLength("")).toBe(0);
});
