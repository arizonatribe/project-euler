/**
 * Checks to see if a given value is a multiple of every value between 1 and another given limit for the range.
 * @private
 * @function
 * @name isMultipleOfEveryValueInRange
 * @param {number} val The value which may or may not be a multple of every value between 1 and the top of the range
 * @param {number} [rangeLimit=10] The top of the range. Every value between 1 and this value will be checked to see if they are multiples of the other provided value.
 * @returns {boolean} Whether or not the value is a multiple of every value in the range
 */
function isMultipleOfEveryValueInRange(val, rangeLimit = 10) {
    // TODO if this function is ever used outside this application,
    // must then check the val and rangeLimit to see if they are positive integers, etc.

    let decrementCount = rangeLimit

    while (decrementCount-- > 1) {
        if (val % decrementCount !== 0) {
            return false
        }
    }

    return true
}

/**
 * Determines the smallest multiple which can be divided evenly (without remainer) by all numbers between a given value and 1. 
 *
 * @function
 * @name smallestMultiple
 * @param {number} [ceiling=10] The threshold at which to start from when determining the smallest multiple of all numbers between it and 1
 * @returns {number} The smallest number which can evenly divide all numbers between 1 and the provided ceiling value.
 */
function smallestMultiple(ceiling = 10) {
    if (!Number.isInteger(ceiling) || ceiling <= 0) {
        return undefined
    }

    if (ceiling === 1) {
        return ceiling
    }

    /* Take the largest number in the range and use it as basis for stepping through the loop.
     * Double it, triple it, quadruple it, etc.
     * Eventually one of those values will also evenly divide all the other numbers between 1 and the largest number in the range.
     * Save a bunch of iterations this way.
     */
    let multiplyStepBy = 1
    let currentVal = ceiling

    do {
        currentVal = ceiling * ++multiplyStepBy

        if (isMultipleOfEveryValueInRange(currentVal, ceiling)) {
            return currentVal
        }
    } while (currentVal < Number.MAX_SAFE_INTEGER)
}

module.exports = {
    smallestMultiple
}
