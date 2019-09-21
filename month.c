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
    printf("%i\n", myTime->tm_mon + 1);
}
