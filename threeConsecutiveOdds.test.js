const threeConsecutiveOdds = require("./1550.three-consecutive-odds");

test("Return true if there are three consecutive odd numbers", () => {
    expect(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12])).toBeTruthy();
});

test("Return false if there are not three consecutive odd numbers", () => {
    expect(threeConsecutiveOdds([2,6,4,1])).toBeFalsy();
});

test("Return false if the length of arr is less than 3", () => {
    expect(threeConsecutiveOdds([5,7])).toBeFalsy();
});