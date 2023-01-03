const checkDistances = require("./2399.check-distances-between-same-letters");

test("Return true if the input s is a well-spaced string", () => {
    expect(checkDistances("abaccb", [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])).toBeTruthy();
});

test("Return false if the input s is NOT a well-spaced string", () => {
    expect(checkDistances("aa", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])).toBeFalsy();
});