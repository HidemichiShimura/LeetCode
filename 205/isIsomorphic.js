/* URL of this problem
 * https://leetcode.com/problems/isomorphic-strings/description/
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function (s, t) {
  const CharMap = new Map();

  if ([...new Set(s)].length !== [...new Set(t)].length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (!CharMap.has(s.charAt(i))) {
      CharMap.set(s.charAt(i), t.charAt(i));
      continue;
    }
    if (CharMap.get(s.charAt(i)) !== t.charAt(i)) {
      return false;
    }
  }
  return true;
};

module.exports = isIsomorphic;
