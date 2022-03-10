package amicable_test

import (
	"testing"

	"example.com/amicable-pairs-sum/amicable"
)

func TestSumProperDivisors(t *testing.T) {
    if amicable.SumProperDivisors(220) != 284 {
        t.Fatal("Sum of proper divisors for 220 should be 284")
    }
    if amicable.SumProperDivisors(284) != 220 {
        t.Fatal("Sum of proper divisors for 284 should be 220")
    }
}

func TestSumAmicablePairs(t *testing.T) {
    if amicable.SumAmicablePairs(1000) != 504 {
        t.Fatal("Sum of amicable pairs between 1 and 1000 should be 504")
    }
    if amicable.SumAmicablePairs(10000) != 31626 {
        t.Fatal("Sum of amicable pairs between 1 and 10000 should be 31626")
    }
}
