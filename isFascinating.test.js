const isFascinating = require("./2729.check-if-the-number-is-fascinating");

test("Return true if the number n is fascinating", () => {
  expect(isFascinating(192)).toBeTruthy();
});

test("Return false if the number n is fascinating", () => {
  expect(isFascinating(100)).toBeFalsy();
});

test("Return false if the number n is 0", () => {
  expect(isFascinating(0)).toBeFalsy();
});

test("Return false if the number n is -0", () => {
  expect(isFascinating(-0)).toBeFalsy();
});

test("Return false if the number n is Infinity", () => {
  expect(isFascinating(Infinity)).toBeFalsy();
});

test("Return false if the number n is -Infinity", () => {
  expect(isFascinating(-Infinity)).toBeFalsy();
});
