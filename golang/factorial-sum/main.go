package main

import (
	"fmt"
	"log"
	"strconv"
	"strings"
)

// Add a given number into a list x times and sum the results
func str_sum(num string, n int) string {
    var strLen = len(num)
    var num_list = make([]string, strLen)

    for i := strLen - 1; i >= 0; i-- {
        var digitSum int

        for j := 0; j < n; j++ {
            digit, err := strconv.Atoi(string([]rune(num)[i]))
            if err != nil {
                log.Fatal("Invalid numeric char:", digitSum)
            }
            digitSum += digit
        }

        if i < strLen - 1 {
            digitLen := len(string(num_list[i + 1]))

            if digitLen > 1 {
                stopAt := digitLen - 1
                keepDigit := string([]rune(num_list[i + 1])[stopAt])
                strCarryOver := string([]rune(num_list[i + 1])[0:stopAt])
                num_list[i + 1] = keepDigit

                carryOver, err := strconv.Atoi(strCarryOver)
                if err != nil {
                    log.Fatal("Invalid numeric char:", digitSum)
                }
                digitSum += carryOver
            }
        }

        num_list[i] = strconv.Itoa(digitSum)
    }

    return strings.Join(num_list, "")
}

func main() {
    var start_from int = 100
    var runningTotal string = strconv.Itoa(start_from)

    for n := start_from - 1; n > 0; n-- {
        runningTotal = str_sum(runningTotal, n)
    }

    var digitSum int

    for i := 0; i < len(runningTotal); i++ {
        char, err := strconv.Atoi(string([]rune(runningTotal)[i]))

        if err != nil {
            log.Fatal("Invalid numeric char:", char)
        }
        digitSum += char
    }

    fmt.Println(digitSum)
}
