const divideString = require("./2138.divide-a-string-into-groups-of-size-k");

test("Return the divided groups, each of them has exactyly k characters", () => {
    expect(divideString("abcdefghi", 3, "x")).toEqual(["abc","def","ghi"]);
});

test("Return the divided groups, every group of them but the last one has exactly k characters", () => {
    expect(divideString("abcdefghij", 3, "x")).toEqual(["abc","def","ghi","jxx"]);
});

test("Return the divided groups, the last group of them is not filled with the character fill if the character fill is empty", () => {
    expect(divideString("abcdefghij", 3, "")).toEqual(["abc","def","ghi","j"]);
});
