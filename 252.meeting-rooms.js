/* URL of this problem
 * https://leetcode.com/problems/meeting-rooms/description/
 *
 * @param {number[][]} intervals
 * @return {boolean}
 */

const canAttendMeetings = (intervals) => {
  // Sort intervals in a ascending order by its start time
  const Sorted = [...intervals].sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < Sorted.length - 1; i++) {
    const CurrEnd = Sorted[i][1];
    const NextStart = Sorted[i + 1][0];

    if (CurrEnd > NextStart) {
      return false;
    }
  }
  return true;
};

module.exports = canAttendMeetings;
