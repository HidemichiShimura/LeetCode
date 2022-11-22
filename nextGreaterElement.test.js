const nextGreaterElement =  require("./496.next-greater-element-i");

test("Return an array of two of -1 and one positive number", () => {
    expect(nextGreaterElement([4,1,2], [1,3,4,2])).toEqual([-1,3,-1]);
});

test("Return an array whose elements are -1", () => {
    expect(nextGreaterElement([1,1,1], [1,1,1])).toEqual([-1,-1,-1]);
});

test("Return an empty array if the input arrays are empty", () => {
    expect(nextGreaterElement([], [])).toEqual([]);
});