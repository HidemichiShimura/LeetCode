/* URL of this problem
 *  https://leetcode.com/problems/largest-unique-number/
 */

const largestUniqueNumber = require("./1133.largest-unique-number");

test("Return -1 for an empty array", () => {
    expect(largestUniqueNumber([])).toBe(-1);
});

test("Return -1 for an array with no elements that occurs only once", () => {
    expect(largestUniqueNumber([9,9,8,8,1,1,1])).toBe(-1);
});

test("Return Infinity if it is the only element which occurs only once", () => {
    expect(largestUniqueNumber([Infinity,3,3,5,5])).toBe(Infinity);
});

test("Return -Infinity if it is the only element which occurs only once", () => {
    expect(largestUniqueNumber([-Infinity,3,3,5,5])).toBe(-1);
});