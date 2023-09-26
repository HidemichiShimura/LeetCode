/* URL of this problem
 * https://leetcode.com/problems/number-of-senior-citizens/description/
 *
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let seniorCount = 0;

  details.forEach((detail) => {
    const Age = detail.substring(11, 13);

    if (Age > 60) seniorCount++;
  });

  return seniorCount;
};

module.exports = countSeniors;
