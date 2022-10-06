/* URL of this problem
    https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/
*/

/*
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */

var minMovesToSeat = function(seats, students) {
    seats.sort((a, b) => {return b - a});
    students.sort((a, b) => {return b - a});
    
    let minMoveCount = 0;
    
    for (let i = 0; i < seats.length; i++) {
        minMoveCount += Math.abs(seats[i] - students[i]);
    }
    
    return minMoveCount;
};