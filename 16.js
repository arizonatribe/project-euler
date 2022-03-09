function multiplyBy(strNum, factor) {
    const numbers = Array(factor).fill(strNum)

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

function sumOfDigitsOfExponent(base = 2, power = 2) {
    if (!Number.isInteger(base) || !Number.isInteger(power) || base < 1 || power < 1) {
        return undefined
    }

    let products = []
    let multiplyByItselfCount = 0
    let strRunningTotal

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
