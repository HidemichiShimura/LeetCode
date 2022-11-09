/* URL of this problem
 * https://leetcode.com/problems/reformat-phone-number/
 *
 * @param {string} number
 * @return {string}
 */
 
var reformatNumber = function(number) {
    let numberDigits = number.replaceAll("-", "").replaceAll(" ", "");
    let formattedNumber = "";
    
    while (numberDigits.length > 4) {
        formattedNumber += numberDigits.substring(0,3) + "-";
        numberDigits = numberDigits.substring(3);
    }
    switch (numberDigits.length) {
        case 2:
        case 3:
            formattedNumber += numberDigits;
            break;
        case 4:
            formattedNumber += numberDigits.substring(0,2) + "-" + numberDigits.substring(2);
    }
    
    return formattedNumber;
};

module.exports = reformatNumber;