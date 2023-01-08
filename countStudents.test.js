const countStudents = require("./1700.number-of-students-unable-to-eat-lunch");

test("Return 0 if all the students are able to eat sandwiches along with their preferences", () => {
    expect(countStudents([1,1,0,0], [0,1,0,1])).toBe(0);
});

test("Return the number of students that are unable to eat sandwiches", () => {
    expect(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1])).toBe(3);
});

test("Return 0 if the input stundents has no element", () => {
    expect(countStudents([], [1,0,0,0,1,1])).toBe(0);
});

test("Return the length of the input stundents if the input sandwiches has no element", () => {
    expect(countStudents([1,1,1,0,0,1], [])).toBe(6);
});