function str_sum(strNum, n) {
    const strLen = `${strNum}`.length
    const numList = Array(strLen)

    for (let i = strLen - 1; i >= 0; i--) {
        let digitSum = 0

        for (let j = 0; j < n; j++) {
            digitSum += +strNum[i]
        }

        if (numList[i + 1] != null && `${numList[i + 1]}`.length > 1) {
            const keepDigit = `${numList[i + 1]}`.slice(-1)
            const carryOverDigits = `${numList[i + 1]}`.slice(
                0,
                `${numList[i + 1]}`.length - 1
            )
            digitSum += +carryOverDigits
            numList[i + 1] = keepDigit
        }
        numList[i] = digitSum
    }

    return numList.join("")
}

function factorialSum(startFrom) {
    if (!Number.isInteger(startFrom) || startFrom <= 0) {
        return undefined
    }

    let multiplyBy = startFrom
    let runningTotal = `${startFrom}`

    while (--multiplyBy) {
        runningTotal = str_sum(runningTotal, multiplyBy)
    }

    let sum = 0

    for (let i = 0, len = runningTotal.length; i < len; i++) {
        sum += +runningTotal[i]
    }

    return sum
}

module.exports = {
    factorialSum
}
