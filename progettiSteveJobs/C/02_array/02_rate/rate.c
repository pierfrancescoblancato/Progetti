#include <stdio.h>ù

int main() {
    int i, j;
    double capital = 100,rate;
    int years;

    printf("Enter interest rate and number of years: ");
    scanf("%d %d", &rate, &years);

    printf("Rate: %d%% Years: %d\n", rate, years);
    printf("Year 0: %.2f\n", capital);

    double balance[years];

    for (i = 1; i <= years; i++) {
        capital = capital + (capital * rate / 100);
        balance[i - 1] = capital;
        //printf("Year %d: %d\n", i, balance[i - 1]);
    }

    printf("| Anno  |  Bilancio    |\n");
    for (j = 0; j < years; j++) {
        printf("|   %d   |   %.2f €   |\n", j + 1, balance[j]);
    }

    return 0;
}
