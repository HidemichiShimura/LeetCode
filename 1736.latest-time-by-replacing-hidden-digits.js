/* URL of this problem
 * https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/description/
 *
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
  let [hour, minute] = time.split(":");

  // Convert the hour to the latest
  if (hour === "??") {
    hour = "23";
  } else if (hour.indexOf("?") === 0) {
    if (hour.charAt(1) < 4) {
      hour = hour.replace("?", "2");
    } else {
      hour = hour.replace("?", "1");
    }
  } else {
    if (hour.charAt(0) > 1) {
      hour = hour.replace("?", "3");
    } else {
      hour = hour.replace("?", "9");
    }
  }

  // Convert the minute to the latest
  if (minute === "??") {
    minute = "59";
  } else if (minute.indexOf("?") === 0) {
    minute = minute.replace("?", "5");
  } else {
    minute = minute.replace("?", "9");
  }

  return `${hour}:${minute}`;
};

module.exports = maximumTime;
