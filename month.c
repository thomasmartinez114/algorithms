// Following tutorial below on how to implement month and year
// https : //www.youtube.com/watch?v=4j0pRe8rxhs

#include <stdio.h>
#include <cs50.h>
#include <time.h>

// Define struct
typedef struct tm tm;

int main(void)
{
    time_t currentTime;
    time(&currentTime);

    printf("%s\n", ctime(&currentTime));

    // Access what month it is
    tm *myTime = localtime(&currentTime);
}
