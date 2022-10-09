/* URL of this problem
    https://leetcode.com/problems/reformat-date/
*/

/*
 * @param {string} date
 * @return {string}
 */
 
var reformatDate = function(date) {
    const dateArr = date.split(" ");
    
    const year = dateArr[2];
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].indexOf(dateArr[1]) + 1;
    let day = dateArr[0].substring(0, dateArr[0].length - 2);
        
    if (month < 10) {
        month = "0" + month;
    }
    
    if (day.length === 1) {
        day = "0" + day;
    }
    
    return year + "-" + month + "-" + day;
}