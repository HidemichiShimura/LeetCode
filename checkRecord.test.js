const checkRecord = require("./551.student-attendance-record-i");

test("Return true if the student is eligible for an attendance award", () => {
    expect(checkRecord("PPALLP")).toBeTruthy();
});

test("Return true if the student is NOT eligible for an attendance award", () => {
    expect(checkRecord("PPALLL")).toBeFalsy();
});