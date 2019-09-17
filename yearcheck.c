// https : //stackoverflow.com/questions/1442116/how-to-get-the-date-and-time-values-in-a-c-program

#include <stdio.h>
#include <cs50.h>

int main(void)
{
    int pastMonth = 6;

    int currMonth = 9;

    int pastYear = 1992;

    int currYear = 2019;

    // if statement
    // if currMonth > pastMonth {
    // do currMonth - pastMonth
    //}

    int totalMonths = (currMonth - pastMonth) / 12;

    printf("%i\n", totalMonths);
}

// int main(void)
// {
//     // Iteratively double i
//     for (int i = 1; ; i *= 2)
//     {
//         printf("%i\n", i);
//         sleep(1);
//     }
// }
