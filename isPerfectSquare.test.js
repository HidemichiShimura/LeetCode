const isPerfectSquare = require("./367.valid-perfect-square");

test("Return true if the input number is a perfect square", () => {
    expect(isPerfectSquare(16)).toBeTruthy();
});

test("Return false if the input number is not a perfect square", () => {
    expect(isPerfectSquare(14)).toBeFalsy();
});

test("Return false if the input number is 0", () => {
    expect(isPerfectSquare(0)).toBeFalsy();
});