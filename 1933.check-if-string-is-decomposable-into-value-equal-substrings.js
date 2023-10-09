/* URL of this problem
 * https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/description/
 *
 * @param {string} s
 * @return {boolean}
 */
var isDecomposable = function (s) {
  const ValueEqualStrings = [];
  const DecomposedStrings = [];
  let lengthTwoCount = 0;
  let startIdx = 0;
  let endIdx = 1;

  // Create an array of value-equal substrings
  while (endIdx <= s.length) {
    if (s.charAt(startIdx) !== s.charAt(endIdx)) {
      ValueEqualStrings.push(s.substring(startIdx, endIdx));
      startIdx = endIdx;
    }
    endIdx++;
  }
  // Create an array of value-equal substrings, each of which has length of 2 or 3
  for (let i = 0; i < ValueEqualStrings.length; i++) {
    let valueEqualStr = ValueEqualStrings[i];

    while (valueEqualStr.length > 0) {
      DecomposedStrings.push(valueEqualStr.substring(0, 3));
      valueEqualStr = valueEqualStr.substring(3);
    }
  }

  for (let i = 0; i < DecomposedStrings.length; i++) {
    if (DecomposedStrings[i].length === 1) {
      return false;
    } else if (DecomposedStrings[i].length === 2) {
      lengthTwoCount++;
    }
  }

  return lengthTwoCount === 1;
};

module.exports = isDecomposable;
