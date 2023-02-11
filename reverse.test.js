const reverse = require("./7.reverse-integer");

test("Return the reversed integer of a positive integer", () => {
  expect(reverse(123)).toBe(321);
});

test("Return the reversed integer of a negative integer", () => {
  expect(reverse(-123)).toBe(-321);
});

test("Return the reversed integer with 0 at the beginning removed", () => {
  expect(reverse(120)).toBe(21);
});

test("Return 0 if the input x is 0", () => {
  expect(reverse(0)).toBe(0);
});

test("Return NaN if the input x is Infinity", () => {
  expect(reverse(Infinity)).toBeNaN();
});

test("Return NaN if the input x is -Infinity", () => {
  expect(reverse(-Infinity)).toBeNaN();
});
