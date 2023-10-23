const finalString = require("./finalString");

test("Return the final string where some characters were reversed", () => {
  expect(finalString("string")).toBe("rtsng");
});

test("Return the final string where some characters were reversed multiple times", () => {
  expect(finalString("poiinter")).toBe("ponter");
});

test("Return an empty string if the input string is empty", () => {
  expect(finalString("")).toBe("");
});
