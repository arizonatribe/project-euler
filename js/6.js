/**
 * Summarizes all the squares of positive integers in a range starting from 1 and ending at a given ceiling value.
 *
 * @function
 * @name sumOfSquaresInRange
 * @param {numaber} [ceiling=10] The top of the range of numbers to summarizes squares
 * @returns {number} The sum of all the squares in the range from 1 to the specified ceiling value.
 */
function sumOfSquaresInRange(ceiling = 10) {
    if (!Number.isInteger(ceiling) || ceiling <= 0) {
        return undefined
    }

    let sum = 0
    for (let i = 1; i <= ceiling; i++) {
      sum += (i**2)
    }

    return sum
}

/**
 * Squares the sum of all the positive integers in a range starting from 1 and ending at a given ceiling value.
 *
 * @function
 * @name squareOfSumOfRange
 * @param {number} [ceiling=10] The top of the range of numbers to summarize
 * @returns {number} The square of the sum of all the numbers in the range from 1 to the specified ceiling value.
 */
function squareOfSumOfRange(ceiling = 10) {
    if (!Number.isInteger(ceiling) || ceiling <= 0) {
        return undefined
    }

    let sum = 0
    for (let i = 1; i <= ceiling; i++) {
        sum += i
    }

    return sum**2
}

/**
 * Finds the difference between the square of the sum and the sum of the squares of all positive integers from 1 and ending at a given ceiling value.
 *
 * @function
 * @name differenceSquareOfSumAndSumOfSquares
 * @param {number} [ceiling=10] The top of the range of numbers to get the diff of the sums
 * @returns {number} The difference of the square of the sum and the sum of the squares of numbers in the range from 1 to the specified ceiling value.
 */
function differenceSquareOfSumAndSumOfSquares(ceiling = 10) {
    if (!Number.isInteger(ceiling) || ceiling <= 0) {
        return undefined
    }

    return squareOfSumOfRange(ceiling) - sumOfSquaresInRange(ceiling)
}

module.exports = {
    squareOfSumOfRange,
    sumOfSquaresInRange,
    differenceSquareOfSumAndSumOfSquares
}
