/* URL of this problem
 *  https://leetcode.com/problems/robot-return-to-origin/
 *
 * @param {string} moves
 * @return {boolean}
 */
 
var judgeCircle = function(moves) {
    let x = 0;
    let y = 0;
    
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case 'R':
                x += 1;
                break;
            case 'L':
                x -= 1;
                break;
            case 'U':
                y += 1;
                break;
            case 'D':
                y -= 1;
                break;
        }
    }
    
    return x === 0 && y === 0; 
};