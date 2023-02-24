const mostCommonWord = require("./819.most-common-word");

test("Return the most frequent word that is not banned", () => {
  expect(
    mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
      "hit",
    ])
  ).toBe("ball");
});

test("Return the most frequent word when no banned words are specified", () => {
  expect(mostCommonWord("a.", [])).toBe("a");
});
