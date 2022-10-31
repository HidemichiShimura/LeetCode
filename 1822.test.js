const modules = require("./1822.sign-of-the-product-of-an-array");
const arraySign =  modules.arraySign;
const signFunc = modules.signFunc;

test("Return 1 if the product of the input is positive", () => {
    expect(arraySign([-1,-2,-3,-4,3,2,1])).toBe(1);
});

test("Return -1 if the product of the input is negative", () => {
    expect(arraySign([-1,1,-1,1,-1])).toBe(-1);
});

test("Return 0 if the product of the input is negative", () => {
    expect(arraySign([1,5,0,2,-3])).toBe(0);
});