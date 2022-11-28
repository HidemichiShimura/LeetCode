const plusOne = require("./66.plus-one");

test("Return digits added with one", () => {
    expect(plusOne([1,2,3])).toEqual([1,2,4]);
});

test("Return digits with carryover", () => {
    expect(plusOne([9])).toEqual([1,0]);
});