/* URL of this problem
 * https://leetcode.com/problems/number-of-valid-clock-times/description/
 *
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
  const [Hour, Minute] = time.split(":");
  let hourChoice = 1;
  let minuteChoice = 1;

  if (Hour === "??") {
    hourChoice = 24;
  } else if (Hour.indexOf("?") === 0) {
    if (Hour.charAt(1) < 4) {
      hourChoice = 3;
    } else {
      hourChoice = 2;
    }
  } else if (Hour.indexOf("?") === 1) {
    if (Hour.charAt(0) < 2) {
      hourChoice = 10;
    } else if (Hour.charAt(0) === "2") {
      hourChoice = 4;
    }
  }
  if (Minute === "??") {
    minuteChoice = 60;
  } else if (Minute.indexOf("?") === 0) {
    minuteChoice = 6;
  } else if (Minute.indexOf("?") === 1) {
    minuteChoice = 10;
  }

  return hourChoice * minuteChoice;
};

module.exports = countTime;
