import {countPrefixSuffixPairs} from "./countPrefixSuffixPairs"

describe("countPrefixSuffixPairs module", () => {
  test("Return the number of index pairs", () => {
    expect(countPrefixSuffixPairs(["a","aba","ababa","aa"])).toBe(4)
  })
  test("Return 0 if there are no index pairs", () => {
    expect(countPrefixSuffixPairs(["abab","ab"])).toBe(0)
  })
  test("Return 0 if there are no index pairs", () => {
    expect(countPrefixSuffixPairs([])).toBe(0)
  })
})