/* URL of this problem
 * https://leetcode.com/problems/distribute-candies/
 *
 * @param {number[]} candyType
 * @return {number}
 */
 
var distributeCandies = function(candyType) {
    const distinctCandyTypes = [...new Set(candyType)];
    
    return distinctCandyTypes.length > candyType.length / 2 ? candyType.length / 2 : distinctCandyTypes.length;
};