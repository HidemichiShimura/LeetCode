/* URL of this problem
 * https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/description/
 *
 * @param {string} s
 * @return {string}
 */

var greatestLetter = function(s) {
    const Chars = s.split("");
    const UpperLetters = Chars.filter(isUpperCaseLetter);
    const LowerLetters = Chars.filter(isLowerCaseLetter);
    const UpperLowerLetters = UpperLetters.filter(char => {
        const LowerLetter = char.toLowerCase();

        return LowerLetters.includes(LowerLetter);
    });
    let GreatestLetter;

    // Sort UpperLowerLetters in an ascending order by UTF-16 code
    // Initialize GreatestLetter to the letter with the greatest UTF-16 code
    // Initialize it to an empty string if the greatest code does not exist
    UpperLowerLetters.sort();
    GreatestLetter = UpperLowerLetters[UpperLowerLetters.length - 1] ?? "";

    return GreatestLetter;
};

function isUpperCaseLetter(char) {
    const Code = char.charCodeAt(0);

    // The UTF-16 code range of uppercase English letter is 65 to 90
    return 65 <= Code && Code <= 90;
}

function isLowerCaseLetter(char) {
    const Code = char.charCodeAt(0);

    // The UTF-16 code range of lowercase English letter is 97 to 122
    return 97 <= Code && Code <= 122;
}

module.exports = greatestLetter;