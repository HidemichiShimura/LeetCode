/* URL of this problem
 * https://leetcode.com/problems/capitalize-the-title
 *
 * @param {string} title
 * @return {string}
 */
 
var capitalizeTitle = function(title) {
    const TitleWords = title.split(" ");

    for (let i = 0; i < TitleWords.length; i++) {
        let TitleWord = TitleWords[i];
        
        if (TitleWord.length <= 2) {
            TitleWord = TitleWord.toLowerCase();
        } else {
            TitleWord = TitleWord.charAt(0).toUpperCase() + TitleWord.substring(1).toLowerCase();
        }

        TitleWords[i] = TitleWord;
    }

    return TitleWords.join(" ");
};

module.exports = capitalizeTitle;