const numberOfPairs = require("./2341.maximum-number-of-pairs-in-array");

test("Return a number of pairs and a number of leftovers", () => {
    expect(numberOfPairs([1,3,2,1,3,2,2])).toEqual([3,1]);
});

test("Return a number of paris and no leftover", () => {
    expect(numberOfPairs([1,1])).toEqual([1,0]);
});

test("Return no paris and 1 leftover if there is onlu one element in the input nums", () => {
    expect(numberOfPairs([1])).toEqual([0,1]);
});

test("Return no paris and no leftover is the input nums is empty", () => {
    expect(numberOfPairs([])).toEqual([0,0]);
});