const checkString = require("./2124.check-if-all-as-appears-before-all-bs");

test("Return true if every 'a' appears before the first 'b'", () => {
    expect(checkString("aabb")).toBeTruthy();
});

test("Return false if there is any 'a' after the first 'b'", () => {
    expect(checkString("abba")).toBeFalsy();
});

test("Return true if there is only 'b's", () => {
    expect(checkString("bbbb")).toBeTruthy();
});

test("Return true if there is only 'a's", () => {
    expect(checkString("aaaa")).toBeTruthy();
});