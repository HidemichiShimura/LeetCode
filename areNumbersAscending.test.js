const areNumbersAscending = require("./2042.check-if-numbers-are-ascending-in-a-sentence");

test("Return true if the numbers in the input string is strictly increasing from left to right", () => {
    expect(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")).toBeTruthy();
});

test("Return false if the numbers in the input string is not strictly increasing from left to right", () => {
    expect(areNumbersAscending("hello world 5 x 5")).toBeFalsy();
});