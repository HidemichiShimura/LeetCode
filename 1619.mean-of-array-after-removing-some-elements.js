/* URL of this problem
 * https://leetcode.com/problems/mean-of-array-after-removing-some-elements/
 *
 * @param {number[]} arr
 * @return {number}
 */

var trimMean = function(arr) {
    const Sorted = [...arr].sort((a, b) => a - b);
    const RemoveSize = arr.length * 0.05;
    let Mean = 0;

    Sorted.splice(0, RemoveSize); // Remove elements of RemoveSize from the beginning of the sorted array
    Sorted.splice(Sorted.length - RemoveSize, RemoveSize); // Remove elements of RemoveSize from the  of the sorted array
    
    Mean = Sorted.reduce((sum, curr) => sum + curr) / Sorted.length;
    Mean = Math.floor(Mean * Math.pow(10, 5)) / Math.pow(10, 5); // Format a float number

    return Mean;
};

module.exports = trimMean;