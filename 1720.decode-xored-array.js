/* URL of this problem
 * https://leetcode.com/problems/decode-xored-array/description/
 *
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  const arr = [first];

  for (let i = 0; i < encoded.length; i++) {
    arr.push(arr[i] ^ encoded[i]);
  }
  return arr;
};

module.exports = decode;
