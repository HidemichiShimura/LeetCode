/* URL of this problem
 * https://leetcode.com/problems/thousand-separator/description/
 *
 * @param {number} n
 * @return {string}
 */

var thousandSeparator = function (n) {
  let str = n.toString();
  const SeparatatedStr = [];

  // Extract the last 3 digits and add them to SeparatatedStr in an order by occurrence
  while (str.length > 0) {
    SeparatatedStr.unshift(str.substring(str.length - 3, str.length));
    str = str.substring(0, str.length - 3);
  }

  return SeparatatedStr.join(".");
};

module.exports = thousandSeparator;
