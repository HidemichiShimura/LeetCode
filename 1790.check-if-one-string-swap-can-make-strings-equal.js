/* URL of this problem
 * https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/description/
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var areAlmostEqual = function (s1, s2) {
  let swapCount = 0;
  let hasSameChars = true;
  const S1CharsByOccurrence = new Map();
  const S2CharsByOccurrence = new Map();

  for (let i = 0; i < s1.length; i++) {
    const S1Char = s1.charAt(i);
    const S2Char = s2.charAt(i);

    S1CharsByOccurrence.set(S1Char, (S1CharsByOccurrence.get(S1Char) ?? 0) + 1);
    S2CharsByOccurrence.set(S2Char, (S2CharsByOccurrence.get(S2Char) ?? 0) + 1);

    if (S1Char !== S2Char) {
      swapCount++;
    }
  }
  // Check if s1 and s2 has a different character
  S1CharsByOccurrence.forEach((value, key) => {
    if (S2CharsByOccurrence.get(key) !== value) {
      hasSameChars = false;
    }
  });

  return hasSameChars && (swapCount === 0 || swapCount === 2);
};

module.exports = areAlmostEqual;
