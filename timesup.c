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
    // x starting hour between 1 and 12
    int x = 3;

    // y hours passed between 1 and int_max
    int y = 5;

    int time = x + y; // 8

    int days = 0;

    // Does time equal 24 hours -- check if time = 24 = 1 day
    // If it is full day increment the days || days++
    // If doesn't modulo the remaining time

    if (time >= 24)
    {
        days++;
        int remain = time % 24;
    }
    // If time is not a full day, get the hours and turn into regular time
    else
    {
        int military = time - 12;
    }

    // Check constraints of input

    // Convert the hours input to minutes to then add together and then convert back to hours
    //
}
