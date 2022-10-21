/* URL of this problem
 *  https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
 *
 * @param {number[]} prices
 * @return {number[]}
 */
 
var finalPrices = function(prices) {
    const answer = [];
    
    for (let i = 0; i < prices.length; i++) {
        let finalPrice = prices[i];
        
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                finalPrice -= prices[j];
                break;
            }
        }
        
        answer.push(finalPrice);
    }
    
    return answer;
};