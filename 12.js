function findNthTriangularNumber(nth = 1) {
    let sum = 0

    if (Number.isInteger(nth) && nth > 0) {
        for (let i = 1; i <= nth; i++) {
            sum += i
        }
    }

    return sum
}

function findFirstTriangularNumberWithNumOfFactors(numOfFactors) {
    if (!Number.isInteger(numOfFactors) || numOfFactors <= 0) {
        throw new Error("Number of factors should be a positive integer value")
    }

    if (numOfFactors === 1) {
        return numOfFactors
    }

    let count = numOfFactors

    while (++count < Number.MAX_SAFE_INTEGER) {
        const triangularNumber = findNthTriangularNumber(count)

        let multiplyBy = 1
        let factors = 0

        while (multiplyBy < (triangularNumber / multiplyBy)) {
            if (triangularNumber % multiplyBy === 0) {
                factors+=2
            }
            multiplyBy++
        }

        if (factors >= numOfFactors) {
            return triangularNumber
        }
    }
}

module.exports = {
    findNthTriangularNumber,
    findFirstTriangularNumberWithNumOfFactors
}
