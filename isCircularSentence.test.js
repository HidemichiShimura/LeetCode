const isCircularSentence = require("./2490.circular-sentence");

test("Return true if the sentence is circular", () => {
    expect(isCircularSentence("leetcode exercises sound delightful")).toBeTruthy();
});

test("Return true if the sentence has one word where the first latter and the last letter are equal", () => {
    expect(isCircularSentence("eetcode")).toBeTruthy();
});

test("Return false if the last letter of a word and the first letter of the next word is not equal", () => {
    expect(isCircularSentence("Leetcode is cool")).toBeFalsy();
});

test("Return false if the last letter of and the first letter of sentence is not equal", () => {
    expect(isCircularSentence("leetcode exercises sound deserving")).toBeFalsy();
});