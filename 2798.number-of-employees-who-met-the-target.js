/* URL of this problem
 * https://leetcode.com/problems/number-of-employees-who-met-the-target/description/
 *
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  return hours.filter((hour) => hour >= target).length;
};

module.exports = numberOfEmployeesWhoMetTarget;
