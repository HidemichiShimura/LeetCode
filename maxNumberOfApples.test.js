const maxNumberOfApples = require("./1196.how-many-apples-can-you-put-into-the-basket");

test("Return the weight length if the sum of all the apples are less than or equal to 5000", () => {
    expect(maxNumberOfApples([100,200,150,1000])).toBe(4);
});

test("Return 0 if all the element in weight is greater than 5000", () => {
    expect(maxNumberOfApples([6000,7000,8000,10000])).toBe(0);
});