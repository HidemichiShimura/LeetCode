/* URL of this problem
 * https://leetcode.com/problems/student-attendance-record-i/
 *
 * @param {string} s
 * @return {boolean}
 */
 
var checkRecord = function(s) {
    // True if the student is absent for fewer than 2 days in total
    let IsPresent = s.replaceAll("L", "").replaceAll("P", "").length < 2; 
    // True if the student is never late for 3 or more consecutive days.
    let IsOnTime = !s.includes("LLL"); 
        
    return IsPresent && IsOnTime;
};

module.exports = checkRecord;