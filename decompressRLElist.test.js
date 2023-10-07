const decompressRLElist = require("./1313.decompress-run-length-encoded-list");

test("Return the decompressed list", () => {
  expect(decompressRLElist([1, 2, 3, 4])).toEqual([2, 4, 4, 4]);
});

test("Return an empty array if nums is empty", () => {
  expect(decompressRLElist([])).toEqual([]);
});

test("Return an empty array if all the freqs in nums are 0", () => {
  expect(decompressRLElist([0, 2, 0, 4])).toEqual([]);
});

test("Return the decompressed list with Infinity", () => {
  expect(decompressRLElist([3, Infinity])).toEqual([
    Infinity,
    Infinity,
    Infinity,
  ]);
});

test("Return the decompressed list with 0", () => {
  expect(decompressRLElist([3, 0])).toEqual([0, 0, 0]);
});
