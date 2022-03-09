/**
 * Determine if a number is prime (divisible only by itself and 1)
 *
 * @function
 * @name isPrime
 * @param {number} num A value which may or may not be a prime number
 * @returns {boolean} Whether or not the provided value is a prime number
 */
function isPrime(num) {
    if (!Number.isInteger(num) || num <= 0 || num % 2 === 0) {
        return false
    }

    for (let i = 3; i < num; i+=2) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}

/**
 * Finds the largest prime factor of a given value
 *
 * @function
 * @name largestPrimeFactor
 * @param {number} [num=600_851_475_143] The value for which to find the largest prime factor
 * @returns {number} The largest prime factor for the provided value
 */
function largestPrimeFactor(num = 600_851_475_143) {
    // Ensure the provided value is acceptable (positive integer value)
    if (!Number.isInteger(num) || num <= 1) {
        return undefined
    }

    let divideMaxBy = 2
    let max = num

    // There's no point in checking every number.
    // If the half the provided number isn't a prime number,
    // then there's no point in checking ANY number between the halfway point and the provided number.
    // Likewise, if a third the provided number isn't prime, then there's no point checking any higher value.
    // And so on down the line from a fourth, a fifth, etc.
    // Eventually we'll hit some prime number by chopping the provided number into smaller fragments
    // (with 1 as the floor).

    do {
        max = num / divideMaxBy
        divideMaxBy++
    } while (max < num && !isPrime(max))

    return max
}

module.exports = {
    largestPrimeFactor
}
