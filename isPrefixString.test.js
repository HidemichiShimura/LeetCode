const isPrefixString = require("../jest-test/1961.check-if-string-is-a-prefix-of-array");

test("Return true if the argument s can be made by concatinating the first k strings in the argument words", () => {
    expect(isPrefixString("iloveleetcode", ["i","love","leetcode","apples"])).toBeTruthy();
});

test("Return false if the argument s can NOT be made by concatinating the first k strings in the argument words", () => {
    expect(isPrefixString("iloveleetcode", ["apples","i","love","leetcode"])).toBeFalsy();
});

test("Return false if the argument s is empty", () => {
    expect(isPrefixString("", ["i","love","leetcode","apples"])).toBeFalsy();
});

test("Return false if the argument words empty", () => {
    expect(isPrefixString("iloveleetcode", [])).toBeFalsy();
});