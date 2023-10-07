const numberOfEmployeesWhoMetTarget = require("./2798.number-of-employees-who-met-the-target");

test("Return the number of employees who worked at least target hours", () => {
  expect(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2)).toBe(3);
});

test("Return 0 if there is no employee who worked at least target hours", () => {
  expect(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6)).toBe(0);
});

test("Return 0 if the array hours is empty", () => {
  expect(numberOfEmployeesWhoMetTarget([], 3)).toBe(0);
});

test("Return the number of all the employees if target is 0", () => {
  expect(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 0)).toBe(5);
});

test("Return the number of all the employees if target is a negative number", () => {
  expect(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], -3)).toBe(5);
});

test("Return the number of all the employees if target is -0", () => {
  expect(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], -0)).toBe(5);
});

test("Return the number of all the employees if target is a negative number", () => {
  expect(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], -Infinity)).toBe(5);
});

test("Return 0 if target is Infinity", () => {
  expect(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], Infinity)).toBe(0);
});
