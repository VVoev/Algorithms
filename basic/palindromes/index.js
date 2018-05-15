
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((char, index) => {
        return char === str[str.length - i - 1];
    })

}

/*
    for (let i = 0; i < str.length / 2; i += 1) {
            if (str[i] === str[str.length - i - 1]) {
                continue;
            } else {
                return false;
            }
        }
    
        return true;
*/

module.exports = palindrome;