/* URL of this problem
 * https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/description/
 *
 * @param {number[]} cost
 * @return {number}
 */

var minimumCost = function(cost) {
    // Create a copy of cost sorted in a descendign order
    const SortedCost = [...cost].sort((a, b) => b - a);
    let MinCost = 0;

    while (SortedCost.length > 0) {
        // Extract the current top 3 costs and add only the top 2 to MinCost
        // The thrid cost becomes free by not being added to MinCost 
        const Candies = SortedCost.splice(0, 3);
        const FirstCandie = Candies[0] ?? 0;
        const SecondCandie = Candies[1] ?? 0; 

        MinCost += FirstCandie + SecondCandie;
    }

    return MinCost;
};

module.exports = minimumCost;