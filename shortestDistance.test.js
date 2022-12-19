const shortestDistance = require("./243.shortest-word-distance");

test("Return the shortest distance between word1 and word2", () => {
    expect(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice")).toBe(3);
});

test("Return the shortest distance between word1 and word2 in wordsDict where there are two of word1", () => {
    expect(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "coding")).toBe(1);
});

test("Return the length of wordsDict if wordsDict is empty", () => {
    expect(shortestDistance([], "makes", "coding")).toBe(0);
});


test("Return 0 if word1 and word2 are equal", () => {
    expect(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "coding")).toBe(0);
});