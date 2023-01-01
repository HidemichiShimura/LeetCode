const sumOddLengthSubarrays = require("./1588.sum-of-all-odd-length-subarrays");

test("Return the sum of all the odd-length subarrays in the input arr", () => {
    expect(sumOddLengthSubarrays([1,4,2,5,3])).toBe(58);
});

test("Return 0 if the input arr is empty", () => {
    expect(sumOddLengthSubarrays([])).toBe(0);
});

test("Return Infinity if the input arr includes Infinity", () => {
    expect(sumOddLengthSubarrays([1,4,2,5,3,Infinity])).toBe(Infinity);
});

test("Return -Infinity if the input arr includes -Infinity", () => {
    expect(sumOddLengthSubarrays([1,4,2,5,3,-Infinity])).toBe(-Infinity);
});