/* URL of this problem
 * https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/description/
 *
 * @param {number[]} salary
 * @return {number}
 */

var average = function (salary) {
  const MaxSalary = Math.max(...salary);
  const MinSalary = Math.min(...salary);
  // Extract salaries other than MaxSalary and MinSalary
  const Salaries = salary.filter(
    (currSalary) => currSalary !== MaxSalary && currSalary !== MinSalary
  );
  const AverageSalary =
    Salaries.reduce((sum, curr) => sum + curr, 0) / Salaries.length;

  return AverageSalary.toFixed(5);
};

module.exports = average;
