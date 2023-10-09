/* URL of this problem
 * https://leetcode.com/problems/reverse-string-ii/description/
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverseStr = function (s, k) {
  const SubstrLen = 2 * k;
  const Substrs = [];

  // Create an array of substrings of each k characters
  for (let i = 0; i < s.length; i += SubstrLen) {
    Substrs.push(s.substring(i, i + SubstrLen));
  }
  for (let i = 0; i < Substrs.length; i++) {
    if (Substrs[i].length < k) {
      Substrs[i] = Substrs[i].split("").reverse().join("");
    } else {
      // Reverse only the first k characters when the substring length is greater than or equat to k
      Substrs[i] =
        Substrs[i].substring(0, k).split("").reverse().join("") +
        Substrs[i].substring(k);
    }
  }

  return Substrs.join("");
};

module.exports = reverseStr;
