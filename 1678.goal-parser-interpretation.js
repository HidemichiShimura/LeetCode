/*
 * @param {string} command
 * @return {string}
 */

/* URL of this problem
    https://leetcode.com/problems/goal-parser-interpretation/
*/

var interpret = function(command) {
    command = command.replaceAll("()", "o");
    command = command.replaceAll("(al)", "al");
    
    return command;
};