// Build a gift basket with x kilos of chocolate.

// Small bars = 1 k
// Big bars = 5 k

// Use Big bars first
// Return # of Small bars used
// function(S, B, X) s = small B = big x = kilo goal
// Return -1 if can't be done

// Examples
// func(4,1,9) => 4 small used, 1 big === 9
// func(4,1,10) => -1 >>> not enough bars to equal 10
// func(1,2,7) => -1 >>> not enough small bars
// func(7,2,7) => 2 small used, 1 big to === 7k

#include <stdio.h>

int main(void)
{
    // small bars
    int small = 1; // s
    // big bars
    int big = 5; // b
    // Basket kilos *hard code for now
    int basketKilos = 9; // x

    // printf("%i", basketKilos);

    int smalls;
    printf("Enter smalls bars: ");
    scanf("%d", &smalls);
    printf("The amount of smalls is %d", smalls);

}

