/* URL of this problem
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/description/
 *
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let balancedStrCount = 0;
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    switch (s.charAt(i)) {
      case "L":
        balance--;
        break;
      case "R":
        balance++;
        break;
    }

    if (balance === 0) balancedStrCount++;
  }

  return balancedStrCount;
};

module.exports = balancedStringSplit;
