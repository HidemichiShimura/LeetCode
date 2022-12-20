const checkValid = require("./2133.check-if-every-row-and-column-contains-all-numbers");

test("Return true if every row and column of matrix contains all the integers from 1 to the length of matrix(inclusive)", () => {
    expect(checkValid([[1,2,3],[3,1,2],[2,3,1]])).toBeTruthy();
});

test("Return false if any row and column of matrix misses an integer from 1 to the length of matrix(inclusive)", () => {
    expect(checkValid( [[1,1,1],[1,2,3],[1,2,3]])).toBeFalsy();
});

test("Return false if any row and column of matrix contains 0", () => {
    expect(checkValid( [[1,1,0],[1,2,3],[1,2,3]])).toBeFalsy();
});

test("Return false if the number of column and the number of rows are not equal", () => {
    expect(checkValid([[1,2,3,4],[2,3,4,1],[3,4,1,2]])).toBeFalsy();
});