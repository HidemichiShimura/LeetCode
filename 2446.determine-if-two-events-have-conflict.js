/* URL of this problem
 * https://leetcode.com/problems/determine-if-two-events-have-conflict/description/
 *
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */

var haveConflict = function (event1, event2) {
  // Create a 2D array of event1 and event2 converted numbers
  const Events = [
    event1.map((event) => Number(event.replace(":", ""))),
    event2.map((event) => Number(event.replace(":", ""))),
  ];
  Events.sort((a, b) => a[0] - b[0]);

  return Events[0][1] >= Events[1][0];
};

module.exports = haveConflict;
