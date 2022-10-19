/*
 * @param {string} coordinates
 * @return {boolean}
 */

/* URL of this problem
    https://leetcode.com/problems/determine-color-of-a-chessboard-square/
*/

var squareIsWhite = function(coordinates) {
    let columnPattern;
    const column = coordinates.charAt(0);
    const row = parseInt(coordinates.charAt(1));
    
    switch (column) {
        case "a":
        case "c":
        case "e":
        case "g":
            columnPattern = [false,true,false,true,false,true,false,true];
            break;
        case "b":
        case "d":
        case "f":
        case "h":
            columnPattern = [true,false,true,false,true,false,true,false];
            break;
    }
    
    return columnPattern[row - 1];
};