const canMakeArithmeticProgression = require("./1502.can-make-arithmetic-progression-from-sequence");

test("Return true for arithmetic progression", () => {
    expect(canMakeArithmeticProgression([3,5,1])).toBeTruthy();
});

test("Return false for non-arithmetic progression", () => {
    expect(canMakeArithmeticProgression([1,2,4])).toBeFalsy();
});

test("Return false if one of the elmenets is Infinity", () => {
    expect(canMakeArithmeticProgression([3,5,Infinity])).toBeFalsy();
});

test("Return false if one of the elmenets is -Infinity", () => {
    expect(canMakeArithmeticProgression([3,5,-Infinity])).toBeFalsy();
});