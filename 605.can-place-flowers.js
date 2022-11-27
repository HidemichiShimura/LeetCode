/* URL of this problem
 * https://leetcode.com/problems/can-place-flowers/
 *
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 
var canPlaceFlowers = function(flowerbed, n) {
    // Create a copy of flowerbed to modify its elements
    const tempFlowerBed = [...flowerbed];
    let newlyPlantedFlower = 0;
    
    for (let i = 0; i < tempFlowerBed.length; i++) {
        const canPlantAtLeft = tempFlowerBed[i - 1] === undefined || tempFlowerBed[i - 1] === 0;
        const canPlantAtRight = tempFlowerBed[i + 1] === undefined || tempFlowerBed[i + 1] === 0 ;
        
        if (tempFlowerBed[i] === 0 && canPlantAtLeft && canPlantAtRight) {
            tempFlowerBed[i] = 1;
            newlyPlantedFlower++;
        }
    }
    
    return n <= newlyPlantedFlower;
};

module.exports = canPlaceFlowers;