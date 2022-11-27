const canPlaceFlowers = require("./605.can-place-flowers");

test("Return true if additional flowers more than n can be planted", () => {
    expect(canPlaceFlowers([1,0,0,0,1], 1)).toBeTruthy();
});

test("Return false if additional flowers more than n can not be planted", () => {
    expect(canPlaceFlowers([1,0,0,0,1], 2)).toBeFalsy();
});

test("Return true if the input n is 0", () => {
    expect(canPlaceFlowers([1,0,0,0,1], 0)).toBeTruthy();
});