/* URL of this problem
 * https://leetcode.com/problems/rearrange-spaces-between-words/description/
 *
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  const SpaceCount = [...text].filter((char) => char === " ").length;
  const Words = text.split(" ").filter((char) => char.length > 0);
  let rearrangedText;

  if (Words.length < 2) {
    rearrangedText = Words.join("") + " ".repeat(SpaceCount);
  } else {
    // Calculate the maximum spaces to distribute between words and the rest spaces
    const DistSpace = Math.floor(SpaceCount / (Words.length - 1));
    const RestSpace = SpaceCount % (Words.length - 1);

    rearrangedText = Words.join(" ".repeat(DistSpace));
    rearrangedText += " ".repeat(RestSpace);
  }

  return rearrangedText;
};

module.exports = reorderSpaces;
