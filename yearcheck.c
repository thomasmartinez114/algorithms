// https : //stackoverflow.com/questions/1442116/how-to-get-the-date-and-time-values-in-a-c-program

#include <stdio.h>
#include <cs50.h>

int main(void)
{
    int pastMonth = 6;

    int currMonth = 9;

    // This will be sum of months
    int totalMonths = 0;

    int pastYear = 1992;

    int currYear = 2019;

    // This will be sum of years
    int totalYears = 0;

    // implement Do While loop instead?

    if (pastMonth < currMonth && pastYear < currYear)
    {
        totalMonths = currMonth - pastMonth;
        totalYears = currYear - pastYear;
    }
    else
    {
        totalMonths = pastMonth - currMonth;
    }

    printf("Months passed: %i\nYears passed: %i\n", totalMonths, totalYears);
}