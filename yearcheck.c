// https : //stackoverflow.com/questions/1442116/how-to-get-the-date-and-time-values-in-a-c-program

#include <stdio.h>
#include <cs50.h>
#include <time.h>

int main(void)
{
    int pastMonth = 6;

    int currMonth = tm_mon + 1;

    // This will be sum of months
    int totalMonths = 0;

    int pastYear = 1992;

    int currYear = tm_year;

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