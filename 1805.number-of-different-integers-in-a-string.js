/* URL of this problem
 * https://leetcode.com/problems/number-of-different-integers-in-a-string/description/
 *
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  let numbersWithSpace = "";
  let numbers;

  for (let i = 0; i < word.length; i++) {
    if (isNaN(word.charAt(i))) {
      numbersWithSpace += " ";
    } else {
      numbersWithSpace += word.charAt(i);
    }
  }
  numbers = numbersWithSpace.split(" ").filter((number) => number.length > 0);
  numbers = numbers.map((number) => removeLeadingZero(number));
  numbers = [...new Set(numbers)];

  return numbers.length;
};

function removeLeadingZero(str) {
  let numberStr = str;

  while (numberStr.charAt(0) === "0") {
    numberStr = numberStr.substring(1);
  }

  return numberStr;
}

module.exports = numDifferentIntegers;
