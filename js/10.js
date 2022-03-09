function isPrime(val) {
    if (!Number.isInteger(val) || val <= 1 || (val !== 2 && val % 2 === 0)) {
        return false
    }

    let divideValBy = 2

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
 * Summarizes all the prime numbers below a given ceiling (threshold) value.
 *
 * @function
 * @name summarizePrimes
 * @param {number} [ceiling=10] The ceiling value below which to summarize prime numbers
 * @returns {number} The sum of all prime numbers below a given ceiling value
 */
function summarizePrimes(ceiling = 10) {
    if (!Number.isInteger(10) || ceiling <= 0) {
        return undefined
    }

    let sum = 0
    let decrementFrom = ceiling

    while (--decrementFrom) {
        if (isPrime(decrementFrom)) {
            sum += decrementFrom
        }
    }

    return sum
}


module.exports = {
    summarizePrimes
}
