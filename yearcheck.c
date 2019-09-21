// https : //stackoverflow.com/questions/1442116/how-to-get-the-date-and-time-values-in-a-c-program

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// initialize struct
typedef struct tm tm;

int main(void)
{
    time_t now;
    time(&now);

    tm *local = localtime(&now);

    int pastMonth = 0;
    printf("Please a numerical month: ");
    // scanf() will allow us to read what the user types in
    scanf("%i", &pastMonth);
    // printf("%i", pastMonth);

    int currMonth = local->tm_mon + 1;

    // This will be sum of months
    int totalMonths = 0;

    int pastYear = 1992;

    int currYear = local->tm_year + 1900;

    // This will be sum of years
    int totalYears = 0;

    // implement Do While loop instead?
    // do [getint]
    // while (something)

    if (pastMonth < currMonth && pastYear < currYear)
    {
        totalMonths = currMonth - pastMonth;
        totalYears = currYear - pastYear;
    }
    else
    {
        totalMonths = pastMonth - currMonth;
        totalYears = pastYear - currYear;
    }

    printf("Months passed: %i\nYears passed: %i\n", totalMonths, totalYears);
}
