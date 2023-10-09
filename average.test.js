const average = require("./1491.average-salary-excluding-the-minimum-and-maximum-salary");

test("Return the average salary of employees excluding the minimum and maximum salary", () => {
  expect(average([4000, 3000, 1000, 2000])).toBe("2500.00000");
});

test("Return the average salary with 5 digits after the floating point", () => {
  expect(average([5000, 3331, 3330, 3330, 2000])).toBe("3330.33333");
});
