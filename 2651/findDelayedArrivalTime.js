/* URL of this problem
 * https://leetcode.com/problems/calculate-delayed-arrival-time/description/
 *
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  const sum = arrivalTime + delayedTime;

  return sum % 24;
};

module.exports = findDelayedArrivalTime;
