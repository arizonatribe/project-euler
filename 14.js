function largestCollatzChain(ceiling) {
    if (!Number.isInteger(ceiling) || ceiling <= 0) {
        return undefined
    }

    let chain = 1
    let decrementFrom = ceiling

    while (decrementFrom > 1) {
        let startAt = decrementFrom
        let count = 1
        while (startAt > 1) {
            if (startAt % 2 === 0) {
                startAt /= 2
            } else {
                startAt = (startAt * 3) + 1
            }
            count++
        }
        chain = Math.max(count, chain)
        decrementFrom--
    }

    return  chain
}

module.exports = {
    largestCollatzChain
}
