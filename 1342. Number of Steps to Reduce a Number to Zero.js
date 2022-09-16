/*
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    // varialbe to store number of steps
    let neededSteps = 0;
    
    // keep processing num with loop until num reaches to 0
    while (num > 0) {  
       
        // devide or subtract num depending on the conditions
        if (num % 2 == 0) {
            num /= 2;
        } else {
            num--;
        }
        
        // add 1 step to the count
        neededSteps++;
    }
    
    return neededSteps;
};