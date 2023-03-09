const checkZeroOnes = require("./1869.longer-contiguous-segments-of-ones-than-zeros");

test("Return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s", () => {
  expect(checkZeroOnes("1101")).toBeTruthy();
});

test("Return false if the longest contiguous segment of 1's is not strictly longer than the longest contiguous segment of 0's in s", () => {
  expect(checkZeroOnes("110100010")).toBeFalsy();
});

test("Return false if the longest contiguous segment of 1's and the longest contiguous segment of 0's in s has the same length", () => {
  expect(checkZeroOnes("111000")).toBeFalsy();
});

test("Return false if the input s is empty", () => {
  expect(checkZeroOnes("")).toBeFalsy();
});
