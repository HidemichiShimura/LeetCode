/* URL of this problem
 * https://leetcode.com/problems/calculate-money-in-leetcode-bank/
 *
 * @param {number} n
 * @return {number}
 */
 var totalMoney = function(n) {
    const deposits = [];
    let resDay = n;
    let depositOnPrevMonday = 0;
    let deposit = 0;
    
    while (resDay > 0) {
        if (deposits.length % 7 === 0) {
            depositOnPrevMonday++;
            deposit = depositOnPrevMonday;
        }
        
        deposits.push(deposit);
        deposit++;
        resDay--;
    }
    
    return deposits.reduce((curr, sum) => curr + sum);
};