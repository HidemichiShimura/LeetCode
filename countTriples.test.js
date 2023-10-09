const countTriples = require("./1925.count-square-sum-triples");

/* Square triplets rules:
 * A square triple (a,b,c) is a triple where a, b, and c are integers and a^2 + b^2 = c^2 and 1 <= a, b, c <= n
 */

test("Return the number of square triples", () => {
  expect(countTriples(5)).toBe(2);
});

test("Return 0 if n is 0", () => {
  expect(countTriples(0)).toBe(0);
});

test("Return 0 if n is -0", () => {
  expect(countTriples(-0)).toBe(0);
});

test("Return 0 if n is less than 0", () => {
  expect(countTriples(-5)).toBe(0);
});

test("Return 0 if n is -Infinity", () => {
  expect(countTriples(-Infinity)).toBe(0);
});
