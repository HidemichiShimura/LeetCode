/*
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

/* URL of this problem
    https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
*/

var kidsWithCandies = function(candies, extraCandies) {
    // set a variable to hold the maximum number of candies among the kids
    let maxCandies = 0;
    
    // find the maximum number of the candies
    for (let i = 0; i < candies.length; i++) {
        if (maxCandies < candies[i]) {
            maxCandies = candies[i]
        }
    }
    
    // set an array for output
    let outputArr = [];
    
    // add true or false to outputArr when the total number of candies[i] and extraCandies is equal to or greater than the max number found beforehand
    for (let i = 0; i < candies.length; i++) {
        const candiesSum = candies[i] + extraCandies;
        if (maxCandies <= candiesSum) {
            outputArr.push(true);
        } else {
            outputArr.push(false);
        }
    }
    
    return outputArr;
};