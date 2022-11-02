const findErrorNums = require("./645.set-mismatch");

test("Return [2,3] because 2 is duplicated number and 3 is a missing number in the input", () => {
    expect(findErrorNums([1,2,2,4])).toEqual([2,3]);
});