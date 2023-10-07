const hardestWorker = require("./2432.the-employee-that-worked-on-the-longest-task");

test("Return the id of the employee that worked the task with the longest time", () => {
  expect(
    hardestWorker(10, [
      [0, 3],
      [2, 5],
      [0, 9],
      [1, 15],
    ])
  ).toBe(1);
});

test("Return the smallest id of the employee that worked the task with the longest time if there are multiple employees with the same time units", () => {
  expect(
    hardestWorker(2, [
      [0, 10],
      [1, 20],
    ])
  ).toBe(0);
});
