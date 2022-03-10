package amicable

func SumProperDivisors(num int) int {
    sum, a := 1, 2

    for a < (num / a) {
        if num % a == 0 {
            sum += a + (num / a)
        }
        a++
    }

    return sum
}

func SumAmicablePairs(num int) int {
    sum, pairs := 0, map[int]bool{}

    for i := 1; i < num; i++ {
        _, exists := pairs[i]
        if exists {
            continue
        }

        p := SumProperDivisors(i)
        if i != p && SumProperDivisors(p) == i {
            sum += i + p
            pairs[i] = true
            pairs[p] = true
        }
    }

    return sum
}
