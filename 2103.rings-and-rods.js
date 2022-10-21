/* URL of this problem
 *  https://leetcode.com/problems/rings-and-rods/
 *
 * @param {string} rings
 * @return {number}
 */
 
var countPoints = function(rings) {
    const ringRodMap = new Map();
    let numOfRods = 0;
    
    // Create a map of rod numbers for key and ring colors for value
    for (let i = 0; i < rings.length; i += 2) {
        const color = rings[i];
        const rod = rings[i + 1];
        
        ringRodMap.set(rod, (ringRodMap.get(rod) ?? color) + color);
    }
    
    // Check whether each rod has all three colors 
    ringRodMap.forEach((value) => {
        let colorCount = 0;
        const colors = [...value].sort();
        
        for (let i = 0; i < colors.length - 1; i++) {
            // Add one to colorCount when 2 different colors are found next to each other 
            if (colors[i] !== colors[i + 1]) {
                colorCount++;
            }
        }
        
        // Add one to numOfRods when two pairs of different colors are found
        if (colorCount === 2) {
            numOfRods++;
        }
    });
    
    return numOfRods;
};