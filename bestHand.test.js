const bestHand = require("./2347.best-poker-hand");

test("Return Flush for five cards of the same suit", () => {
  expect(bestHand([13, 2, 3, 1, 9], ["a", "a", "a", "a", "a"])).toBe("Flush");
});

test("Return Three of a Kind for three cards of the same rank", () => {
  expect(bestHand([4, 4, 2, 4, 4], ["d", "a", "a", "b", "c"])).toBe(
    "Three of a Kind"
  );
});

test("Return Pair for two cards of the same rank", () => {
  expect(bestHand([10, 10, 2, 12, 9], ["a", "b", "c", "a", "d"])).toBe("Pair");
});

test("Return High Card for any single card", () => {
  expect(bestHand([10, 13, 2, 12, 9], ["a", "b", "c", "a", "d"])).toBe(
    "High Card"
  );
});

test("Return am empty string if ranks is empty", () => {
  expect(bestHand([], ["a", "b", "c", "a", "d"])).toBe("");
});
