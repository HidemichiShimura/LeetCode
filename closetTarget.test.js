const closetTarget = require("./2515.shortest-distance-to-target-string-in-a-circular-array");

test("Return the shortest distance needed to reach the string target when it is closest by going forward", () => {
  expect(
    closetTarget(["hello", "i", "am", "leetcode", "hello"], "hello", 3)
  ).toBe(1);
});

test("Return startIndex if target is at startIndex", () => {
  expect(
    closetTarget(["hello", "i", "am", "leetcode", "hello"], "hello", 0)
  ).toBe(0);
});

test("Return the shortest distance needed to reach the string target when it is closest by going backward", () => {
  expect(closetTarget(["a", "b", "leetcode"], "leetcode", 0)).toBe(1);
});

test("Return -1 if the target word does not exist in words", () => {
  expect(closetTarget(["i", "eat", "leetcode"], "ate", 0)).toBe(-1);
});

test("Return -1 if words is empty", () => {
  expect(closetTarget([], "ate", 0)).toBe(-1);
});
