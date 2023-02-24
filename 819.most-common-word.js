/* URL of this problem
 * https://leetcode.com/problems/most-common-word/description/
 *
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

var mostCommonWord = function (paragraph, banned) {
  let Paragraph;
  let Words;
  let CommonWord;
  let CommonWordFreq = 0;
  let FreqMap = new Map();

  Paragraph = paragraph.toLowerCase();
  Paragraph = replaceSymbol(Paragraph, "!?',;.");
  Paragraph = removeBannedWords(Paragraph, banned);
  Words = Paragraph.split(" ").filter((word) => !(word === " " || word === ""));

  for (let i = 0; i < Words.length; i++) {
    FreqMap.set(Words[i], (FreqMap.get(Words[i]) ?? 0) + 1);
  }
  FreqMap.forEach((value, key) => {
    if (CommonWordFreq < value) {
      CommonWord = key;
      CommonWordFreq = value;
    }
  });

  return CommonWord;
};

function replaceSymbol(str, symbols) {
  let output = str;

  for (let i = 0; i < output.length; i++) {
    if (symbols.includes(output.charAt(i))) {
      output = output.substring(0, i) + " " + output.substring(i + 1);
    }
  }

  return output;
}

function removeBannedWords(str, bannedWords) {
  const Words = str.split(" ").filter((word) => !bannedWords.includes(word));

  return Words.join(" ");
}

module.exports = mostCommonWord;
