/*
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let sqrt = 0; 
    
    for (let i = 1; i < (2 ** 31 -1); i++) {
        if (x < i ** 2) {
            sqrt = i-1;
            break;
        }
    }
    
    return sqrt;
};