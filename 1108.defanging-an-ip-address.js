/*
 * @param {string} address
 * @return {string}
*/

/* URL of this problem
    https://leetcode.com/problems/defanging-an-ip-address/
*/

 var defangIPaddr = function(address) {
    return address.replaceAll(".","[.]");
};