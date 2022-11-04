const canBeTypedWords = require("./1935.maximum-number-of-words-you-can-type");

test("Return 1 if one of the two words in text has a brokenletter", ()=> {
    expect(canBeTypedWords("hello world", "ad")).toBe(1);
});

test("Return 0 if all the words in text has a brokenletter", ()=> {
    expect(canBeTypedWords("leet code", "e")).toBe(0);
});