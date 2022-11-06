const countOperations = require("./2169.count-operations-to-obtain-zero");

test("Return 3 if num1 is 2 and num2 is 3", () => {
    expect(countOperations(2,3)).toBe(3);
});

test("Return 0 if either num1 or num2 is 0", () => {
    expect(countOperations(4,0)).toBe(0);
});