/*
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let bool = false;
    
    if (n <= 0) {
        return bool;
    }
    
    if (1 <= n) {
        for (let i = 0;;i++) {
            if (2 ** i == n) {
                bool = true;
                break;
            }
            
            if (n < 2 ** i ) {
                break;
            }
        }
    } else {
        for (let i = -1;;i--) {
            if (2 ** i == n) {
                bool = true;
                break;
            }   
            
            if (2 ** i < n) {
                break;
            }
        }
    }
    
   return bool;
};