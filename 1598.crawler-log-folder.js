/* URL of this problem
 * https://leetcode.com/problems/crawler-log-folder/description/
 *
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  const Logs = [];

  for (let i = 0; i < logs.length; i++) {
    if (logs[i] === "./") {
      continue;
    } else if (logs[i] === "../") {
      Logs.pop();
    } else {
      Logs.push(logs[i]);
    }
  }

  return Logs.length;
};

module.exports = minOperations;
