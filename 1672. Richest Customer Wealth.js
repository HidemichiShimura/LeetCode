/*
 * @param {number[][]} accounts
 * @return {number}
*/
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    
    for (let i = 0; i < accounts.length; i++) {
        let customerSum = accounts[i][0];
        for (let j = 1; j < accounts[i].length; j++) {
            customerSum += accounts[i][j];
        }
        
        if (maxWealth < customerSum) {
            maxWealth = customerSum;
        }       
    }
    
    return maxWealth;
};