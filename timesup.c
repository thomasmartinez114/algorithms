// Given a starting hour and a number of hours passed display the following:
//             The time is now x:60 and y days have passed
//             ex) Starting hour is x = 3
//                 y = 5 ----> print "Current time is: 8:00 and days passed is: 0"
//             ex) Starting hour is x = 3
//                 y = 25 -----> print "Current time is: 4:00 and days passed is: 1"
//
//             constraints are:
//                 starting hour 1 <= x <= 12
//                 time passed 1 <= y <= int_max

#include <stdio.h>
#include <cs50.h>

int main(void)
{
    // Prompt user for x starting hour between 1 and 12
    int x = 3; //get_int("Starting Hour is between 1 - 12");

    // Prompt user for y hours passed between 1 and int_max
    int y = 5; // get_int("Time passed in hours is: ");

    int time = x + y; // 8

    int days;

    // Check constraints of input
    //     if (0 <= x <= 12)
    //     {
    //         printf("Starting time is %i\n", x);
    //     }

    // Convert the hours input to minutes to then add together and then convert back to hours
    //
}
