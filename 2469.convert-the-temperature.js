/* URL of this problem
 * https://leetcode.com/problems/convert-the-temperature/
 *
 * @param {number} celsius
 * @return {number[]}
 */
 
var convertTemperature = function(celsius) {
    const Kelvin = celsius + 273.15;
    const Fahrenheit = celsius * 1.80 + 32.00;
    const Ans = [Kelvin, Fahrenheit];
    
    return Ans;
};

module.exports = convertTemperature;