/* URL of this problem
 * https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/
 *
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

var countStudents = function(students, sandwiches) {
    const StudentQueue = [...students];
    const SandwichStack = [...sandwiches];

    while (StudentQueue.length > 0) {
        // The length of the student queue at the beginning of loop
        const StudentLen = StudentQueue.length;

        for (let i = 0; i < StudentQueue.length; i++) {
            const Removed = StudentQueue.shift();

            if (Removed === SandwichStack[0]) {
                SandwichStack.shift();
            } else {
                StudentQueue.push(Removed);
            }
        }
        
        // Break the loop when the length at the beginning and the end of loop are the same
        if (StudentLen === StudentQueue.length) {
            break;
        }
    }

    return StudentQueue.length;
};

module.exports = countStudents;