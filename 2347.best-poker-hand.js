/* URL of this problem
 * https://leetcode.com/problems/best-poker-hand/description/
 *
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  const IsFlush = [...new Set(suits)].length === 1;
  const RankMap = new Map();
  const RankLen = ranks.length;
  let maxFreqRank = 0;
  let bestPokerHand = "";

  if (IsFlush) return "Flush";

  for (let i = 0; i < RankLen; i++) {
    RankMap.set(ranks[i], (RankMap.get(ranks[i]) ?? 0) + 1);
  }
  maxFreqRank = Math.max(...RankMap.values());

  if (maxFreqRank >= 3) {
    bestPokerHand = "Three of a Kind";
  } else if (maxFreqRank === 2) {
    bestPokerHand = "Pair";
  } else if (maxFreqRank === 1) {
    bestPokerHand = "High Card";
  }

  return bestPokerHand;
};

module.exports = bestHand;
