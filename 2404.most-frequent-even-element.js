/* URl of this problem
 * https://leetcode.com/problems/most-frequent-even-element/description/
 *
 * @param {number[]} nums
 * @return {number}
 */
 
var mostFrequentEven = function(nums) {
    const EvenNums = nums.filter(num => num % 2 === 0);
    const FreqMap = new Map();
    let MaxEvenElement = EvenNums[0];
    let MaxFreq = 0;
    
    for (let i = 0; i < EvenNums.length; i++) {
        FreqMap.set(EvenNums[i], (FreqMap.get(EvenNums[i]) ?? 0) + 1);
    }
    FreqMap.forEach((value, key) => {
        if (MaxFreq < value){
            MaxFreq = value;
            MaxEvenElement = key;
        } else if (MaxFreq === value) {
            MaxEvenElement = Math.min(MaxEvenElement, key);
        }
    });
    
    return MaxEvenElement ?? -1;
};

module.exports = mostFrequentEven;