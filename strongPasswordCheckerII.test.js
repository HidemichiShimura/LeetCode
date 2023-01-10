/* Strong password criteria
 *
 * It has at least 8 characters.
 * It contains at least one lowercase letter.
 * It contains at least one uppercase letter.
 * It contains at least one digit.
 * It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
 * It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
 */

const strongPasswordCheckerII = require("./2299.strong-password-checker-ii");

test("Return true if the password is strong", () => {
    expect(strongPasswordCheckerII("IloveLe3tcode!")).toBeTruthy();
});

test("Return false if the password length is less than 8", () => {
    expect(strongPasswordCheckerII("Ilove")).toBeFalsy();
});

test("Return false if the password contains NO lowercase letter", () => {
    expect(strongPasswordCheckerII("IlOVELE3TCODE")).toBeFalsy();
});

test("Return false if the password contains NO uppercase letter", () => {
    expect(strongPasswordCheckerII("ilovele3tcode!")).toBeFalsy();
});

test("Return false if the password contains NO digit", () => {
    expect(strongPasswordCheckerII("iloveLetcode!")).toBeFalsy();
});

test("Return false if the password contains NO special character", () => {
    expect(strongPasswordCheckerII("iloveLe3tcode")).toBeFalsy();
});

test("Return false if the password contains the same characters adjacent to each other", () => {
    expect(strongPasswordCheckerII("illoveLe3tcode")).toBeFalsy();
});