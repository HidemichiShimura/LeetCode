/* URL of this problem
 * https://leetcode.com/problems/diet-plan-performance/description/
 *
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function (calories, k, lower, upper) {
  let totalPoints = 0;
  let totalCalories = calories.slice(0, k).reduce((sum, curr) => sum + curr, 0);

  for (let i = 0; i <= calories.length - k; i++) {
    if (totalCalories < lower) {
      totalPoints--;
    } else if (totalCalories > upper) {
      totalPoints++;
    }

    totalCalories -= calories[i];
    totalCalories += calories[i + k];
  }

  return totalPoints;
};

module.exports = dietPlanPerformance;
