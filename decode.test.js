const decode = require("./1720.decode-xored-array");

test("Return the decoded array arr", () => {
  expect(decode([1, 2, 3], 1)).toEqual([1, 0, 2, 1]);
});
