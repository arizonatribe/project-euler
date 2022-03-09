/**
 * Calculates a pythagorean triplet from a given positive integer.
 *
 * @function
 * @name pythagoreanTriplet
 * @param {number} num The value for which the pythagorean triplet will be reverse calculated
 * @returns {Array<Array<number>>} The pythagorean triplet for the provided number
 */
function pythagoreanTriplet(num) {
    if (!Number.isInteger(num) || num <= 0) {
        return undefined
    }

    const triplets = []

    let rootA = 0

    /* while RootA is less than (RootB + RootC) */
    while (++rootA < (num - rootA)) {
        let rootB = rootA + 1

        while (
            /* RootB is less than RootC */
            rootB < (num - rootA - rootB)
            /* Roots A, B and C are less than (or equal to) the limit */
            && rootA + rootB + (num - rootA - rootB) <= num
        ) {
            const rootC = Math.sqrt(rootA**2 + rootB**2)

            if (rootA + rootB + rootC === num) {
                triplets.push([rootA, rootB, rootC])
            }

            rootB++
        }
    }

    return triplets
}

module.exports = {
    pythagoreanTriplet
}
