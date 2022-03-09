/**
 * Find the sum of all numbers below a given threshold number which are multiples of two provided values.
 *
 * @function
 * @name sumOfMultiples
 * @param {number} [ceiling=10] The number below which all the multiples should be found
 * @param {number} [multipleA=3] The first number from which multiples will deduced
 * @param {number} [multipleB=5] The second number from which multiples will deduced
 * @returns {number} The sum of all numbers which are multiples of the two provided values _and_ below the provided threshold value.
 *
 */
function sumOfMultiples(
    ceiling = 10,
    multipleA = 3,
    multipleB = 5
) {
    if (!ceiling || ceiling <= multipleA || ceiling <= multipleB) {
        return undefined
    }

    let sum = 0
    let decrementCount = ceiling
    let maxMultiple = Math.max(multipleA, multipleB)
    let loopCount = 0

    while (--decrementCount > maxMultiple) {
        loopCount++
        if (
            decrementCount % multipleA === 0
            || decrementCount % multipleB === 0
        ) {
            sum += decrementCount
      	}
    }

    sum += (multipleA + multipleB)
    return sum
}

module.exports = {
    sumOfMultiples
}
