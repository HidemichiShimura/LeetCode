const buyChoco = require("./2706.buy-two-chocolates");

test("Return a positive leftover", () => {
  expect(buyChoco([1, 2, 2, 1], 3)).toBe(1);
});

test("Return 0 if the leftover is 0", () => {
  expect(buyChoco([1, 2, 2], 3)).toBe(0);
});

test("Return money if the leftover is negative", () => {
  expect(buyChoco([3, 2, 3], 3)).toBe(3);
});

test("Return money if there is one chocolate buyable", () => {
  expect(buyChoco([1], 3)).toBe(3);
});

test("Return money if there is no chocolate buyable", () => {
  expect(buyChoco([], 3)).toBe(3);
});
