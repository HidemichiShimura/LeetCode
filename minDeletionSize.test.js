const minDeletionSize = require("./944.delete-columns-to-make-sorted");

test("Return 1 if there is 1 column to delete", () => {
    expect(minDeletionSize(["cba","daf","ghi"])).toBe(1);
});

test("Return 0 if there is no column to delete", () => {
    expect(minDeletionSize(["a","b"])).toBe(0);
});
