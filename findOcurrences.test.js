const findOcurrences = require("./1078.occurrences-after-bigram");

test("Return an array of all the third words after first and second in its occurrence order", () => {
    expect(findOcurrences("alice is a good girl she is a good student", "a", "good"))
    .toEqual(["girl","student"]);
});

test("Return an empty array if the input text is empty", () => {
    expect(findOcurrences("", "a", "good"))
    .toEqual([]);
});

test("Return an empty array if the input first is empty", () => {
    expect(findOcurrences("alice is a good girl she is a good student", "", "good"))
    .toEqual([]);
});

test("Return an empty array if the input second is empty", () => {
    expect(findOcurrences("alice is a good girl she is a good student", "a", ""))
    .toEqual([]);
});