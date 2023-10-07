const countSeniors = require("./2678.number-of-senior-citizens");

test("Return the number of senior citizens", () => {
  expect(
    countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
  ).toBe(2);
});

test("Return 0 if there is no senior citizens", () => {
  expect(countSeniors(["1313579440F2036", "2921522980M5644"])).toBe(0);
});

test("Return 0 if details is empty", () => {
  expect(countSeniors([])).toBe(0);
});
