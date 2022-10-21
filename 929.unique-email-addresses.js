/* URL of this problem
 *  https://leetcode.com/problems/unique-email-addresses/
 *
 * @param {string[]} emails
 * @return {number}
 */
 
var numUniqueEmails = function(emails) {
    // Create an array of emails which contain local names the rules apply to
    const emailsWithProcessedLocalName = emails.map((email) => {
        // Extract the local name from the email  
        let localName = email.substring(0, email.indexOf("@"));
        
        // Extract a substring which exists before a plus character
        if (localName.includes("+")) {
            localName = localName.substring(0, email.indexOf("+"));
        }
        // Remove all dots from the local name
        localName = localName.replaceAll(".", "");
        
        return localName + email.substring(email.indexOf("@"));
    });
    
    return [...new Set(emailsWithProcessedLocalName)].length;
};