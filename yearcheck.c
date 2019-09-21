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

    // User input for month
    float pastMonth;
    printf("Enter your birth month (xx format): ");
    scanf("%f", &pastMonth); // scanf() will allow us to read what the user types in

    // User input for year
    int pastYear = 0;
    printf("Please enter your birth year (xxxx format): ");
    scanf("%i", &pastYear);

    // Current month & year
    int currMonth = local->tm_mon + 1;
    int currYear = local->tm_year + 1900;

    // Sum of months and years
    float totalMonths;
    int totalYears = 0;
    // grandTotal = totalYears + totalMonths;

    // Conditons to summations
    if (pastMonth < currMonth)
    {
        totalMonths = (currMonth - pastMonth) / 12;
    }
    if (pastYear < currYear)
    {
        totalYears = currYear - pastYear;
    }
    else
    {
        totalMonths = (pastMonth - currMonth) / 12;
        totalYears = pastYear - currYear;
    }
    printf("Years passed: %i\nMonths passed: %.2f\n", totalYears, totalMonths);
    // printf("Total time passed: %.2f", grandTotal);
}

// if (pastMonth < currMonth && pastYear < currYear)
// {
//     totalMonths = currMonth - pastMonth;
//     totalYears = currYear - pastYear;
// }
// else
// {
//     totalMonths = pastMonth - currMonth;
//     totalYears = pastYear - currYear;
// }

// printf("Months passed: %i\nYears passed: %i\n", totalMonths, totalYears);
