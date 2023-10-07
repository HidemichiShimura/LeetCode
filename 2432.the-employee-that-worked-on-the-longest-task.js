/* URL of this problem
 * https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/description/
 *
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
  const LogMap = new Map();
  let idWithLongestTimeUnit = -1;
  let longestTimeUnit = 0;

  for (let i = 0; i < logs.length; i++) {
    const Id = logs[i][0];
    const StartTime = logs[i - 1] ? logs[i - 1][1] : 0;
    const LeaveTime = logs[i][1];
    const TimeUnit = LeaveTime - StartTime;

    LogMap.set(Id, Math.max(LogMap.get(Id) ?? 0, TimeUnit));
  }
  LogMap.forEach((value, key) => {
    if (longestTimeUnit < value) {
      idWithLongestTimeUnit = key;
      longestTimeUnit = value;
    } else if (longestTimeUnit === value) {
      idWithLongestTimeUnit = Math.min(idWithLongestTimeUnit, key);
    }
  });

  return idWithLongestTimeUnit;
};

module.exports = hardestWorker;
