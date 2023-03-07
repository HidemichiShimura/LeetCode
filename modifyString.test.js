const modifyString = require("./1576.replace-all-s-to-avoid-consecutive-repeating-characters");

test("Return the final string after replacing ? with a lower English letter which is not same as the adjacent letters", () => {
  expect(modifyString("?zs")).toBe("azs");
});

test("Return the original string if there is no ? in the string", () => {
  expect(modifyString("azs")).toBe("azs");
});

test("Return an empty string if the input string is empty", () => {
  expect(modifyString("")).toBe("");
});
