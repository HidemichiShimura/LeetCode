const thousandSeparator = require("../jest-test/1556.thousand-separator");

test("Return a string wihtout any separator dot", () => {
  expect(thousandSeparator(987)).toBe("987");
});

test("Return a string seperated by dots", () => {
  expect(thousandSeparator(1234)).toBe("1.234");
});

test("Return a string of 0s seperated by dots if the input n consists only of 0", () => {
  expect(thousandSeparator(0000000)).toBe("0.000.000");
});
