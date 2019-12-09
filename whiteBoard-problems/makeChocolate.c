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

//#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // func(4,1,9) => 4 small used, 1 big === 9

    // weight of bars
    int weightSmalls = 1;
    int weightBigs = 5;

    // amount chocolate available
    int amtSmall = 4; // get_int("Enter amount of small bars: ");
    int amtBig = 1;   // get_int("Enter amount of big bars: ");

    // baskets weight in kilos
    int amtBasket = 9; // get_int("Enter weight wanted in basket: ");

    int totalSmall = amtSmall * weightSmalls;
    printf("Small kilograms: %i \n", totalSmall);
    int totalBig = amtBig * weightBigs;
    printf("Big kilograms: %i \n", totalBig);

    // Modulo
    int remainder = amtBasket % totalBig; // using bigs first
    printf("%i \n", remainder);
}

// int main(void)
// {
//     // small bars weight
//     int small; // s
//     // big bars weight
//     int big; // b
//     // Basket kilos
//     int basketKilos; // x
//     printf("Small bars kilograms: ");
//     scanf("%i", &small);
//     printf("Big bars kilograms: ");
//     scanf("%i", &big);
//     printf("Basket max kilograms: ");
//     scanf("%i", &basketKilos);

//     // int smallBars;
//     // int bigBars;
//     // printf("Enter how many small bars: ");
//     // scanf("%i", &smallBars);
//     // printf("Enter how many big bars: ");
//     // scanf("%i", &bigBars);

//     // Modulo
//     int remainder = basketKilos % big;
//     printf("Modulo big bars to basket is: %i", remainder);

//     // printf("small bars = %i\n", smallBars);
//     // printf("big bars = %i\n", bigBars);
// }

// int smalls;
// printf("Enter smalls bars: ");
// scanf("%d", &smalls);
// printf("The amount of smalls is %d", smalls);
