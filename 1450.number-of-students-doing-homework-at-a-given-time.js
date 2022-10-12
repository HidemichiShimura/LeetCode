/* URL of this problem
    https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
*/

/*
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */

var busyStudent = function(startTime, endTime, queryTime) {
    let studentNum = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (endTime[i] < queryTime) {
            continue;
        }
        
        if (queryTime >= startTime[i]) {
            studentNum++;
        }
    }
    return studentNum;
};