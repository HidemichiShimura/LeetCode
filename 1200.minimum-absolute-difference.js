/* URL of this problem
    https://leetcode.com/problems/minimum-absolute-difference/
*/

/*
 * @param {number[]} arr
 * @return {number[][]}
 */

var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => {return a - b;});
   
    let minAbsDiff = Math.abs(arr[1] - arr[0]);
    
    for (let i = 1; i < arr.length - 1; i++) {
        minAbsDiff = Math.min(minAbsDiff, Math.abs(arr[i + 1] - arr[i]));
    }
    
    const pairs = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (minAbsDiff === Math.abs(arr[i + 1] - arr[i])) {
            pairs.push([arr[i], arr[i + 1]]);
        }    
    }
    
    return pairs;
};