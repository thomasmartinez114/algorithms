#include <stdio.h>
#include <cs50.h>
#include <time.h>

int main(void)
{
    time_t currentTime;
    time(&currentTime);

    printf("%s\n", ctime(&currentTime));
}
