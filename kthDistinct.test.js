const kthDistinct = require("./2053.kth-distinct-string-in-an-array");

test("Return k th distinct string present in arr", () => {
    expect(kthDistinct(["d","b","c","b","c","a"], 2)).toEqual("a");
});

test("Return an empty string if there are fewer than 3 distinct strings in arr", () => {
    expect(kthDistinct(["a","b","a"], 3)).toEqual("");
});

test("Return an empty string if arr is empty", () => {
    expect(kthDistinct([], 3)).toEqual("");
});