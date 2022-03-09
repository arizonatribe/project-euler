/**
 * Checks if a given numeric value is a prime number.
 * This is any integer value divisible only by itself and 1.
 *
 * @function
 * @name isPrime
 * @param {number} val A value to verify is a prime number
 * @returns {boolean} Whether or not the given value is a prime number
 */
function isPrime(val) {
    if (!Number.isInteger(val) || val <= 1 || (val !== 2 && val % 2 === 0)) {
        return false
    }

    /* In checking if a given number is prime,
     * it isn't necessary to even check if it is
     * divisible by the majority of numbers between itself and 1.
     * Nothing greater than a third of the value need be checked,
     * but by getting a third/fourth/fifth/sixth/etc of the value
     * and using that as the cutoff limit to check for divisibility,
     * we can save many iterations.
     */
    let divideValBy = 3

    while (divideValBy < val && divideValBy <= (val / divideValBy)) {
        if (
            val % divideValBy === 0 || (
                Number.isInteger(val / divideValBy)
                && val % (val / divideValBy) === 0
            )
        ) {
            return false
        }

        divideValBy++
    }

    return true
}

/**
 * Starting from 1 (as the 1st prime number) retrieves the "nth" prime number specified.
 *
 * @function
 * @name getNthPrime
 * @param {number} [nth=1] The "ordinal" representing the prime number to retrieve
 * @returns {number} The prime number matching the specified ordinal
 */
function getNthPrime(nth = 1) {
    if (!Number.isInteger(nth) || nth < 1) {
        return undefined
    }

    if (nth <= 2) {
        return nth + 1
    }

    let primeCount = 3
    let primeCandidate = 5

    while (primeCount < nth) {
        primeCandidate+=2

        if (isPrime(primeCandidate)) {
            primeCount++
        }
    }

    return primeCandidate
}

module.exports = {
    isPrime,
    getNthPrime
}
