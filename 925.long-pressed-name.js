/* URL of this problem
 * https://leetcode.com/problems/long-pressed-name/description/
 *
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */

var isLongPressedName = function (name, typed) {
  // Create a 2D array, each subarray of which consists of substrings of the same characters
  const NameSubstrs = isLongPressedNameHelper(name);
  const TypedSubstrs = isLongPressedNameHelper(typed);

  if (NameSubstrs.length !== TypedSubstrs.length) return false;

  for (let i = 0; i < NameSubstrs.length; i++) {
    const NameSubstr = NameSubstrs[i];
    const TypedSubstr = TypedSubstrs[i];

    // Return false when they are not in an order by the character's occurrence
    if (NameSubstr.charAt(0) !== TypedSubstr.charAt(0)) {
      return false;
    }

    if (NameSubstr.length > TypedSubstr.length) return false;
  }
  return true;
};

const isLongPressedNameHelper = (str) => {
  const arr = [];

  while (str.length > 0) {
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) !== str.charAt(i + 1)) {
        arr.push(str.substring(0, i + 1));
        str = str.substring(i + 1);
        break;
      }
    }
  }

  return arr;
};

module.exports = isLongPressedName;
