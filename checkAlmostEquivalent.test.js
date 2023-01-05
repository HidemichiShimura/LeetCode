const checkAlmostEquivalent = require("./2068.check-whether-two-strings-are-almost-equivalent");

test("Return true if word1 and word2 comprise the same letters and frequency differences of all the letters are less than 3", () => {
    expect(checkAlmostEquivalent("abcaccc", "abaaacc")).toBeTruthy();
});

test("Return true if there is a letter which does not exist in either word1 or word2 and frequency differences of all the letters are less than 3", () => {
    expect(checkAlmostEquivalent("cccddabba", "babababab")).toBeTruthy();
});

test("Return false if there is a letter which exists in both word1 and word2 or either of them has more than 3 frequency differences", () => {
    expect(checkAlmostEquivalent("aaaa", "bccb")).toBeFalsy();
});