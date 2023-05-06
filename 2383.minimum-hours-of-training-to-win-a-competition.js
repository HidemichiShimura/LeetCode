/* URL of this problem
 * https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/description/
 *
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (
  initialEnergy,
  initialExperience,
  energy,
  experience
) {
  let tempEnergy = initialEnergy;
  let tempExperience = initialExperience;
  let requiredEnergy = 0;
  let requiredExperience = 0;

  for (let i = 0; i < energy.length; i++) {
    if (energy[i] < tempEnergy) {
      tempEnergy -= energy[i];
    } else {
      requiredEnergy += energy[i] - tempEnergy + 1;
      tempEnergy = 1;
    }
    if (experience[i] < tempExperience) {
      tempExperience += experience[i];
    } else {
      requiredExperience += experience[i] - tempExperience + 1;
      tempExperience = experience[i] + experience[i] + 1;
    }
  }

  return requiredEnergy + requiredExperience;
};

module.exports = minNumberOfHours;
