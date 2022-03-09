const grid4x4 = [
    12, 34, 15, 99,
    28, 19, 33, 13,
    78, 98, 23, 14,
    09, 91, 81, 75
]
const grid20x20 = [
    08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08,
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00,
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65,
    52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91,
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80,
    24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50,
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70,
    67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21,
    24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72,
    21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95,
    78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92,
    16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57,
    86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58,
    19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40,
    04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66,
    88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69,
    04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36,
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16,
    20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54,
    01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48
]

/**
 * Checks a given list of numbers for the greatest product possible by multiplying a specified number of multiplicands.
 * Note: The multiplicands must be adjacent in some direction (vertical, horizontal or diagonal).
 *
 * @example
 * 12 __34__ 15 99
 * 28 __19__ 33 13
 * 78 __98__ 23 14
 * 09 __91__ 81 75
 * @function
 * @name largestAdjacentProduct
 * @param {Array<number>} numbers A list of numbers to inspect
 * @param {number} [numOfMultiplicands=4] The number of adjacent multiplicands to be multiplied into a product
 * @param {number} [columnCount=20] The number of columns to assume are in each row
 * @returns {number} The greatest product found by multiplying the specified number of adjacent multiplicands
 */
function largestAdjacentProduct(numbers, numOfMultiplicands = 4, columnCount = 20) {
    if (!Array.isArray(numbers) || numbers.some(num => !Number.isInteger(num))) {
        throw new Error("Must specify a list of integer values to inspect")
    }
    if (!Number.isInteger(numOfMultiplicands) || numOfMultiplicands < 2) {
        throw new Error("Must be at least 2 multiplicands")
    }
    if (numOfMultiplicands > numbers.length) {
        throw new Error("There are fewer numbers in the list than number of specified multiplicands")
    }
    if (!Number.isInteger(columnCount) || columnCount < 1) {
        throw new Error("The column count must be a positive integer")
    }
    if (columnCount > numbers.length) {
        throw new Error("There are fewer numbers in the list than number of columns")
    }
    if (numOfMultiplicands > columnCount) {
        throw new Error("There are more multiplicands than number of columns")
    }
    if (numbers.length % columnCount !== 0) {
        throw new Error([
            `There are ${numbers.length} numbers in the list but ${columnCount} was specified`,
            "The number of specified columns must divide evenly into the count of numbers in the list"
        ].join("\n"))
    }

    function multiplyN(pluckFn) {
        return Array(numOfMultiplicands)
            .fill(0)
            .map((_, idx) => pluckFn(idx) || 0)
            .reduce((runningTotal, multiplicand) => runningTotal * multiplicand, 1)
    }

    let maxProduct = 0

    for (let leftIdx = 0; leftIdx <= (columnCount - numOfMultiplicands); leftIdx++) {
        /* Horizontal */
        for (let rowIdx = 0; rowIdx < columnCount; rowIdx++) {
            maxProduct = Math.max(
                maxProduct,
                multiplyN((idx) => numbers[(
                    leftIdx
                    + (rowIdx * columnCount)
                    + idx
                )])
            )
        }

        /* Vertical */
        for (let vertIdx = 0; vertIdx < columnCount; vertIdx++) {
            maxProduct = Math.max(
                maxProduct,
                multiplyN((idx) => numbers[(
                    vertIdx
                    /* leftIdx here is actually the row index and instead vertIdx represents the left index */
                    + (leftIdx * columnCount)
                    + (idx * columnCount)
                )])
            )
        }

        /* Diagonal Up */
        for (
            let rowIdx = columnCount * (numOfMultiplicands - 1);
            rowIdx < (columnCount**2);
            rowIdx += columnCount
        ) {
            maxProduct = Math.max(
                maxProduct,
                multiplyN((idx) => numbers[(
                    leftIdx
                    + rowIdx
                    - (idx * columnCount)
                    + idx
                )])
            )
        }

        /* Diagonal Down */
        for (
            let rowIdx = 0;
            rowIdx < (columnCount**2) - (columnCount * (numOfMultiplicands - 1));
            rowIdx += columnCount
        ) {
            maxProduct = Math.max(
                maxProduct,
                multiplyN((idx) => numbers[(
                    leftIdx
                    + rowIdx
                    + (idx * columnCount)
                    + idx
                )])
            )
        }
    }

    return maxProduct
}

module.exports = {
    grid4x4,
    grid20x20,
    largestAdjacentProduct
}
