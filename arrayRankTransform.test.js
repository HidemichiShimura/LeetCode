const arrayRankTransform = require("./1331.rank-transform-of-an-array");

test("Return an array with transformed ranks", () => {
    expect(arrayRankTransform([40,10,20,30])).toEqual([4,1,2,3]);
});

test("Return an array with all the same transformed ranks", () => {
    expect(arrayRankTransform([100,100,100])).toEqual([1,1,1]);
});

test("Return an empty array with no transformed ranks", () => {
    expect(arrayRankTransform([])).toEqual([]);
});

test("Return an array with transformed ranks when the argument arr has zero", () => {
    expect(arrayRankTransform([40,10,20,30,0])).toEqual([5,2,3,4,1]);
});

test("Return an array with transformed ranks when the argument arr has -Infinity and Infinity", () => {
    expect(arrayRankTransform([-Infinity,-Infinity,5,Infinity,Infinity])).toEqual([1,1,2,3,3]);
});