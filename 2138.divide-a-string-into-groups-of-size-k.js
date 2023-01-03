/* URL of this problem
 * https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/description/
 *
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */

var divideString = function(s, k, fill) {
    const Divided = [];
    const LastGroupLen = s.length % k;

    for (let i = 0; i < s.length; i += k) {
        const Substr = s.substring(i, i + k);

        Divided.push(Substr);
    }
    // A character fill is used to complete the group
    // if the length of the last group does not have k characters remaining.
    if (LastGroupLen > 0 && LastGroupLen < k) {
        Divided[Divided.length -1] += fill.repeat(k - LastGroupLen);
    }

    return Divided;
};

module.exports = divideString;