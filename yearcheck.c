// https : //stackoverflow.com/questions/1442116/how-to-get-the-date-and-time-values-in-a-c-program

#include <stdio.h>
#include <cs50.h>

int main(void)
{
    int pastMonth = 6;

    int currMonth = 9;

    int totalMonths = 0;

    int pastYear = 1992;

    int currYear = 2019;

    int totalYears = 0;

    // if statement
    // if currMonth > pastMonth {
    // do currMonth - pastMonth
    //}

    // implement Do While loop instead?

    if (pastMonth < currMonth)
    {
        totalMonths = currMonth - pastMonth;
    }
    else
    {
        totalMonths = pastMonth - currMonth;
    }

    printf("Months passed: %i\n", totalMonths);

    // int totalMonths = (currMonth - pastMonth) / 12;

    // printf("%i\n", totalMonths);
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
