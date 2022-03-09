/**
 * Multiplies a - likely large - numeric string a given number of times.
 * This helps deal with the challenge of working with mathematical operations whose results exceed the max safe size limit for integers.
 *
 * Essentially this follows the same basic technique used in large addition exercises in primary school:
 *   - stack each large number and line up the numeric columns (right to left)
 *   - add the single digits from each column
 *   - "carry the one" - or whatever double/triple/quadruple digit prefix remains - to the next column's addition
 *
 * @function
 * @name multiplyBy
 * @param {string} strNum A (large) stringified number
 * @param {number} multiplicand The number of times to multiple the provided number by
 * @returns {string} A new stringified number representing the product of the multiplication opeartion
 */
function multiplyBy(strNum, multiplicand) {
    const numbers = Array(multiplicand).fill(strNum)

    const len = `${strNum}`.length
    const results = Array(len)
    let decrementFrom = len

    while (--decrementFrom >= 0) {
        const lastDigits = results[decrementFrom + 1]
        let sumDigit = numbers
            .map(num => `${num}`[decrementFrom])
            .reduce((acc, strDigit) => acc + +strDigit, 0)

        if (lastDigits != null && `${lastDigits}`.length > 1) {
            sumDigit += +`${lastDigits}`.slice(0, `${lastDigits}`.length - 1)
            results[decrementFrom + 1] = +`${lastDigits}`.slice(-1)
        }
        results[decrementFrom] = sumDigit
    }

    return results.join("")
}

/**
 * Raises a given `base` by a given `power` and then adds all the digits from the result.
 *
 * @function
 * @name sumOfDigitsOfExponent
 * @param {number} [base=2] The base number which is the subject of the exponential operation
 * @param {number} [power=2] The number of times to multiple the `base` by itself
 * @returns {number} The sum of all the digits from the result of raising the `base` by the specified `power`
 */
function sumOfDigitsOfExponent(base = 2, power = 2) {
    if (!Number.isInteger(base) || !Number.isInteger(power) || base < 1 || power < 1) {
        return undefined
    }

    let strRunningTotal
    let multiplyByItselfCount = 0

    while (++multiplyByItselfCount <= power) {
        strRunningTotal = multiplyBy(strRunningTotal || 1, base)
    }

    let sumEachDigitCount = strRunningTotal.length
    let digitSum = 0

    while (--sumEachDigitCount >= 0) {
        digitSum += +`${strRunningTotal[sumEachDigitCount] || 0}`
    }

    return digitSum
}

module.exports = {
    multiplyBy,
    sumOfDigitsOfExponent
}
