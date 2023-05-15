/* URL of this problem
 * https://leetcode.com/problems/count-vowel-substrings-of-a-string/description/
 *
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word) {
  let vowelStrCount = 0;

  // Assign values to the indices i and j
  // so that the substring length in each loop has more than 5 which is the number of vowels
  for (let i = 0; i <= word.length - 5; i++) {
    for (let j = i + 5; j <= word.length; j++) {
      const SubStr = word.substring(i, j);
      const HasOnlyVowels = [...SubStr].every((char) => "aeiou".includes(char));

      if (HasOnlyVowels) {
        const Vowels = [...new Set(SubStr)].sort((a, b) => a.localeCompare(b));

        Vowels.join("") === "aeiou" && vowelStrCount++;
      }
    }
  }

  return vowelStrCount;
};

module.exports = countVowelSubstrings;
