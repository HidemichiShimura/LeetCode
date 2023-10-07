/* URL of this problem
 * https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/description/
 *
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  const Vowels = ["a", "e", "i", "o", "u"];
  let vowelStrCount = 0;

  for (let i = left; i <= right; i++) {
    const FirstChar = words[i].charAt(0);
    const LastChar = words[i].charAt(words[i].length - 1);
    const IsVowelStr = Vowels.includes(FirstChar) && Vowels.includes(LastChar);

    IsVowelStr && vowelStrCount++;
  }

  return vowelStrCount;
};

module.exports = vowelStrings;
