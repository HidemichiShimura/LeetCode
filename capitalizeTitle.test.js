const capitalizeTitle = require("./2129.capitalize-the-title");

test("Capitalize all the words with more than 3 characters", () => {
    expect(capitalizeTitle("capiTalIze tHe titLe")).toBe("Capitalize The Title");
});

test("Change words with less than 3 characters to lowercase", () => {
    expect(capitalizeTitle("of In a I")).toBe("of in a i");
});

test("Return an empty string if the input title is empty", () => {
    expect(capitalizeTitle("")).toBe("");
});