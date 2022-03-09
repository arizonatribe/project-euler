/** Finds the largest product of the specified number of adjacent digits.
 *
 * @function
 * @name largestProductOfAdjacentDigits
 * @param {string|number} num A number (or numeric string) whose digits will be traversed to find the largest product of adjacent digits
 * @param {number} [numOfDigits=4] The number of adjacent digits to multiply together
 * @returns {number} The largest product of x number of adjacent digits in the specified number/numeric-string.
 */
function largestProductOfAdjacentDigits(num, numOfDigits = 4) {
    if (
        !/^\d+$/.test(num)
        || Number.isNaN(+num)
        || +num <= 0
        || !Number.isInteger(numOfDigits)
        || numOfDigits <= 0
        || numOfDigits > `${num}`.length
    ) {
        return undefined
    }

    const strNum = `${num}`
    const products = []

    for (let i = 0, maxIndex = strNum.length - numOfDigits; i <= maxIndex; i++) {
        const numChunk = strNum.slice(i, i + numOfDigits)

        /* If we have all 9's, then we're done early */
        if (/^9+$/.test(numChunk)) {
            return 9**numOfDigits
        }

        /* Skip any chunk of digits containing a zero */
        if (!/0/.test(numChunk)) {
            /* Sorting in descending order by highest digits */
            products.push(numChunk.split("").reduce((p, v) => p * +v, 1))
        }
    }

    /* Pluck off the largest chunk (sorted in descending order) */
    const [largestChunk] = products.sort((a, b) => a > b ? -1 : 1)

    return largestChunk
}

module.exports = {
    large_number,
    largestProductOfAdjacentDigits
}
