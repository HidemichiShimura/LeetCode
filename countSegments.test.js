/*
 * The input string consists of lowercase and uppercase English letters,
 * digits, or one of the following characters "!@#$%^&*()_+-=',.:".
 * The only space character in the string is ' '.
 */

const countSegments = require("./434.number-of-segments-in-a-string");

test("Return the number of segments in the string.", () => {
  expect(countSegments("Hello, my name is John")).toBe(5);
});

test("Return 0 if the string is empty", () => {
  expect(countSegments("")).toBe(0);
});

test("Return 0 if the string consists only of the spaces characters", () => {
  expect(countSegments("                ")).toBe(0);
});
