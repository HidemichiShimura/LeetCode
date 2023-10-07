/* URL of this problem
 * https://leetcode.com/problems/categorize-box-according-to-criteria/description/
 *
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
  const Volume = length * width * height;
  const IsBulky =
    length >= 10000 ||
    width >= 10000 ||
    height >= 10000 ||
    Volume >= 1000000000;
  const IsHeavy = mass >= 100;

  if (IsBulky && IsHeavy) {
    return "Both";
  } else if (IsBulky) {
    return "Bulky";
  } else if (IsHeavy) {
    return "Heavy";
  } else {
    return "Neither";
  }
};

module.exports = categorizeBox;
