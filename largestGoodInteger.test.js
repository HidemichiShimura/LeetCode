const largestGoodInteger = require("../jest-test/2264.largest-3-same-digit-number-in-string");

test("Return the maximum good integer from num with multiple good integers", () => {
    expect(largestGoodInteger("6777133339")).toBe("777");
});

test("Return 000 if it is the only good integer", () => {
    expect(largestGoodInteger("2300019")).toBe("000");
});

test("Return an empty string if num has only two elements", () => {
    expect(largestGoodInteger("42")).toBe("");
});

test("Return an empty string if num has only one elements", () => {
    expect(largestGoodInteger("4")).toBe("");
});

test("Return an empty string if num has no elements", () => {
    expect(largestGoodInteger("")).toBe("");
});