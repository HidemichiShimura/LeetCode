/* URL of this problem
 * https://leetcode.com/problems/license-key-formatting/description/
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var licenseKeyFormatting = function (s, k) {
  const Chars = s.replaceAll("-", "").toUpperCase();
  const KeyGroups = [];

  for (let i = Chars.length; i > 0; i -= k) {
    KeyGroups.unshift(Chars.substring(i - k, i));
  }

  return KeyGroups.join("-");
};

module.exports = licenseKeyFormatting;
