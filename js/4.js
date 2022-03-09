/**
 * Reverses the order of characters in a given string value.
 *
 * @function
 * @name reverseString
 * @param {string} str The string of characters to be reversed
 * @returns {string} The reversed string of characters
 */
function reverseString(str) {
    let reversed = ""
    let count = str.length

    while (--count >= 0) {
        reversed += str[count]
    }

    return reversed
}

/**
 * Checks if a given string/numeric value is a "palindrome".
 * This means the characters read the same way even if they are reversed.
 *
 * @function
 * @name isPalindrome
 * @param {string|number} val The value to be checked
 * @returns {boolean} An indicator of whether the string/number is a palindrome
 */
function isPalindrome(val) {
    const strVal = `${val}`.trim()
    if (strVal.length % 2 !== 0) {
        return new Set(strVal.split("")).size === 1
    }

    return reverseString(strVal) === strVal
}

/**
 * Finds the largest possible number whose characters read the same if the string of characters are reversed.
 *
 * @function
 * @name largestPalindrome
 * @param {number} numDigits The number of digits which should be in the palindrome
 * @returns {number} The largest palindrome number possible from two numbers of the provided count of digits
 */
function largestPalindrome(numDigits) {
    if (!Number.isInteger(numDigits) || numDigits <= 1) {
        return undefined
    }

    const min = +`1${Array(numDigits - 1).fill('0').join('')}`
    const max = +Array(numDigits).fill('9').join('')

    let termA = max
    let palindrome

    while (termA-- >= min) {
        let termB = termA
        while (termB++ <= max) {
            const val = termA * termB
            if (isPalindrome(val)) {
                palindrome = Math.max(palindrome || 0, val)
            }
        }
    }
    return palindrome
}

module.exports = {
    largestPalindrome
}
