const minOperations = require("./1598.crawler-log-folder");

test("Return the minimum number of operations needed to go back to the main folder after the cd operations", () => {
  expect(minOperations(["d1/", "d2/", "../", "d21/", "./"])).toBe(2);
});

test("Return 0 if the current directory is main after the cd operations", () => {
  expect(minOperations(["d1/", "../", "../", "../"])).toBe(0);
});

test("Return 0 if logs is empty", () => {
  expect(minOperations([])).toBe(0);
});
