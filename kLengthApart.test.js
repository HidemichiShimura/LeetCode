const kLengthApart = require("./1437.check-if-all-1s-are-at-least-length-k-places-away");

test("Return true if all 1's are at least k places away from each other", () => {
    expect(kLengthApart([1,0,0,0,1,0,0,1], 2)).toBeTruthy();
}); 

test("Return false if any pair of 1's has less than k places in between", () => {
    expect(kLengthApart([1,0,0,1,0,1], 2)).toBeFalsy();
}); 

test("Return true if the argument nums comprises only 1s and the argument k is 0", () => {
    expect(kLengthApart([1,1,1,1,1], 0)).toBeTruthy();
}); 