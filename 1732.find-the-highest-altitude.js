/* URL of this problem
 * https://leetcode.com/problems/find-the-highest-altitude/
 *
 * @param {number[]} gain
 * @return {number}
 */
 
var largestAltitude = function(gain) {
    let TempPoint = 0;
    const Altitudes = [];
    
    for (let i = 0; i < gain.length; i++) {
        TempPoint += gain[i];
        Altitudes.push(TempPoint);
    }
    
    const HighestAltitude = Math.max(...Altitudes);
        
    return HighestAltitude < 0 ? 0 : HighestAltitude;
};

module.exports = largestAltitude;