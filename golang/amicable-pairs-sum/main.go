package main

import (
	"fmt"
	"log"
	"os"
	"strconv"

	"example.com/amicable-pairs-sum/amicable"
)

func main() {
    i, err := strconv.Atoi(os.Args[1])

    if err != nil {
        log.Fatal(err)
    }

    a := amicable.SumAmicablePairs(i)
    fmt.Println(a)
}
