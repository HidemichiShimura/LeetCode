const reformatNumber = require("./1694.reformat-phone-number");

test("Return 2 digit blocks of 3 and 3 digits if the input number has 6 digits", () => {
    expect(reformatNumber("1-23-45 6")).toBe("123-456");
});

test("Return 3 digit blocks of 3, 2 and 2 digits if the input number has 7 digits", () => {
    expect(reformatNumber("123 4-567")).toBe("123-45-67");
});

test("Return 3 digit blocks of 3, 3 and 4 digits if the input number has 8 digits", () => {
    expect(reformatNumber("123 4-5678")).toBe("123-456-78");
});