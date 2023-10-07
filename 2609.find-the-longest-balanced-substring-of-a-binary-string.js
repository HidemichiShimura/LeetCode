/* URL of this problem
 * https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/description/
 *
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s) {
  const BalancedSubStrs = [];

  for (let i = 0; i <= s.length; i++) {
    for (let j = i + 2; j <= s.length; j++) {
      const SubStr = s.substring(i, j);
      const IsBalanced = checkBalancedSubString(SubStr);

      if (IsBalanced) BalancedSubStrs.push(SubStr);
    }
  }

  return BalancedSubStrs.length > 0
    ? Math.max(...BalancedSubStrs.map((substr) => substr.length))
    : 0;
};

function checkBalancedSubString(str) {
  const BinaryNums = [...str];
  const AreAllZeroesOnLeft =
    BinaryNums.lastIndexOf("0") < BinaryNums.indexOf("1");
  const HasEqualNumOfZerosAndOnes =
    BinaryNums.filter((num) => num === "0").length ===
    BinaryNums.filter((num) => num === "1").length;

  return AreAllZeroesOnLeft && HasEqualNumOfZerosAndOnes;
}

module.exports = findTheLongestBalancedSubstring;
