const checkIfExist = require("./1346.check-if-n-and-its-double-exist");

test("Return true if there are a number and its doubled number in the input array of integers", () => {
    expect(checkIfExist([10,2,5,3])).toBeTruthy();
});

test("Return false if there are not a number and its doubled number in the input array of integers", () => {
    expect(checkIfExist([3,1,7,11])).toBeFalsy();
});

test("Return false if there is no element in the input array of integers", () => {
    expect(checkIfExist([])).toBeFalsy();
});

test("Return false if there is only one element in the input array of integers", () => {
    expect(checkIfExist([3])).toBeFalsy();
});