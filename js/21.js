/**
 * Summarizes all the factors which divide evenly between 1 and a given value.
 *
 * @function
 * @name sumProperDivisors
 * @param {number} val The limit at which to find divisors (factors which divide evenly)
 * @returns {number} The sum of all the proper divisors between 1 and the specified value
 */
function sumProperDivisors(val) {
    let sum = 1
    let multiplyBy = 1

    while (++multiplyBy < (val / multiplyBy)) {
        if (val % multiplyBy === 0) {
            sum += multiplyBy + (val / multiplyBy)
        }
    }

    return sum
}

/**
 * Summarizes all the "amicable pairs" between 1 and a given ceiling value.
 * Each number between 1 and the specified ceiling have one or more factors (including one) which divide evenly into that number.
 * If you summarize all those "proper divisors" for a given number, sometimes that summarized value also happens to be the mirror image of that number you're factoring out.
 * An amicable pair is when number "a" has a sum of proper divisors which itself has a sum of proper divisors equalling "a".
 * There aren't many of these numbers.
 *
 * @function
 * @name sumAmicablePairs
 * @param {number} [ceiling=220] The limit at which to find amicable pairs (factors which divide evenly)
 * @returns {number} The sum of all the amicable pairs between 1 and the specified ceiling
 */
function sumAmicablePairs(ceiling = 220) {
    if (!Number.isInteger(ceiling) || ceiling <= 0) {
        return undefined
    }

    let sum = 0
    let num = 1
    const pairs = new Set()

    while (++num < ceiling) {
        if (pairs.has(num)) {
            continue
        }

        let divisorSum = sumProperDivisors(num)

        if (
            divisorSum !== num
            && sumProperDivisors(divisorSum) === num
        ) {
            pairs.add(num)
            pairs.add(divisorSum)
            sum += (num + divisorSum)
        }
    }

    return sum
}

module.exports = {
    sumProperDivisors,
    sumAmicablePairs
}
