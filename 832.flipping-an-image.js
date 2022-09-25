/*
 * @param {number[][]} image
 * @return {number[][]}
 */

/* URL of this problem
    https://leetcode.com/problems/flipping-an-image/
*/

var flipAndInvertImage = function(image) {
    const resultingImage = [];
    
    for (let i = 0; i < image.length; i++) {
        // create a temporary array to hold values after flipping and inverting
        const currSubArray = [];

        // flipping horizontally here
        for (let j = 0; j < image[i].length; j++) {
            currSubArray.unshift(image[i][j]);
        }
        
        // inverting here
        for (let k = 0; k < currSubArray.length; k++) {
            currSubArray[k] === 0 ? currSubArray[k] = 1 : currSubArray[k] = 0; 
        }
        
        resultingImage.push(currSubArray);
    }
    
    return resultingImage;
};