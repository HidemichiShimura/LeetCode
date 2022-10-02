/* URL of this problem
    https://leetcode.com/problems/intersection-of-three-sorted-arrays/
*/

/*
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */

var arraysIntersection = function(arr1, arr2, arr3) {
    const commonNums = [];
    
    for (let i = 0; i < arr1.length; i++) {
        const currNum = arr1[i];
        const isCurrNumInArr2 = arr2.indexOf(currNum) === -1 ? false : true;
        const isCurrNumInArr3 = arr3.indexOf(currNum) === -1 ? false : true;
        
        if (isCurrNumInArr2 && isCurrNumInArr3) {
            commonNums.push(currNum);
        }
    }
    
    return commonNums;
};