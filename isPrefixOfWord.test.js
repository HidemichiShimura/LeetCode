const isPrefixOfWord = require("./1455.check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence");

test("Return the index of searchWord (1-indexed) if it exists in sentence", () => {
    expect(isPrefixOfWord("i love eating burger", "burg")).toBe(4);
});

test("Return -1 if searchWord does not exist in sentence", () => {
    expect(isPrefixOfWord("i am tired", "you")).toBe(-1);
});

test("Return the first index of searchWord in sentence if there are multiple of searchWord", () => {
    expect(isPrefixOfWord("this problem is an easy problem", "pro")).toBe(2);
});

test("Return 1 if searchWord is an empty string", () => {
    expect(isPrefixOfWord("i am tired", "")).toBe(1);
});

test("Return -1 if sentence is an empty string", () => {
    expect(isPrefixOfWord("", "tir")).toBe(-1);
});

test("Return 1 if sentence and searchWord are empty strings", () => {
    expect(isPrefixOfWord("", "")).toBe(1);
});