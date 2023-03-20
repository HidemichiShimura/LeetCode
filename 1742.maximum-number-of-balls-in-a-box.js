/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  const BoxMap = new Map();
  let maxBall = 0;

  for (let i = lowLimit; i <= highLimit; i++) {
    let num = i;
    let digitSum = 0;

    while (num > 0) {
      digitSum += num % 10;
      num = Math.floor(num / 10);
    }

    BoxMap.set(digitSum, (BoxMap.get(digitSum) ?? 0) + 1);
  }
  maxBall = BoxMap.size ? Math.max(...BoxMap.values()) : maxBall;

  return maxBall;
};

module.exports = countBalls;
