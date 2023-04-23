const thirdMax = require("./414.third-maximum-number");

test("Return the third maximum number in the input array nums if there is", () => {
    expect(thirdMax([3,2,1])).toBe(1);
});

test("Return the maximum number in the input array nums if nums's length is less than 3", () => {
    expect(thirdMax([1,2])).toBe(2);
});

test("Return undefined ifthe input array is empty", () => {
    expect(thirdMax([])).toBe(undefined);
});