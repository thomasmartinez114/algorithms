// Following tutorial below on how to implement month and year
// https : //www.youtube.com/watch?v=4j0pRe8rxhs

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    time_t currentTime;
    time(&currentTime);

    struct tm *myTime = localtime(&currentTime);
    printf("The month is: %i\nThe day is: %i\nThe year is: %i\n", myTime->tm_mon + 1, myTime->tm_mday, myTime->tm_year + 1900);

    // Print the following
    // m/d/y
    // 9/20/2019
}
