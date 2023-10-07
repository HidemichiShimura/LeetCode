const reverseOnlyLetters = require("./917.reverse-only-letters");

test("Return the string where only the English letter are reversed", () => {
  expect(reverseOnlyLetters("a-bC-dEf-ghIj")).toBe("j-Ih-gfE-dCba");
});

test("Return an empty string if the input s is empty", () => {
  expect(reverseOnlyLetters("")).toBe("");
});
