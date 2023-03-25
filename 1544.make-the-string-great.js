/* URL of this problem
 * https://leetcode.com/problems/make-the-string-great/description/
 *
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  let goodStr = s;
  let idx = 0;

  while (idx <= goodStr.length - 2) {
    const CurrChar = goodStr.charAt(idx);
    const NextChar = goodStr.charAt(idx + 1);

    if (CurrChar === NextChar) {
      idx++;
      continue;
    }

    if (CurrChar.toLowerCase() === NextChar.toLowerCase()) {
      goodStr = goodStr.substr(0, idx) + goodStr.substr(idx + 2);
      idx = 0;
    } else {
      idx++;
    }
  }

  return goodStr;
};

module.exports = makeGood;
