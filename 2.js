/**
 * Summarizes the even values in a Fibonacci series, not exceeding a max threshold.
 *
 * @function
 * @name summarizeEvenFibonacciTerms
 * @param {number} [max=4_000_000] The max at which to stop totaling even values in the Fibonacci series
 * @returns {number} The sum of even values in the Fibonacci series between zero and (not including) the max
 */

function summarizeEvenFibonacciTerms(max = 4_000_000) {
    if (!Number.isInteger(max) || max < 0) {
        return undefined
    }

    let sum = 0
    let prevTerm = 0
    let currentTerm = 0

    while (currentTerm < max) {
        if (currentTerm % 2 === 0) {
            sum += currentTerm
        }

        ([currentTerm, prevTerm] = [
            currentTerm + (prevTerm || 1),
            currentTerm
        ])
    }

    return sum
}

module.exports = {
    summarizeEvenFibonacciTerms
}
