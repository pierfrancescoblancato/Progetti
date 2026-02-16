/* Test per numeri primi */
#include <stdio.h>
#include <stdbool.h> /* Serve per avere il valore bool in C */


bool is_prime(int n){
    int divisor;

    if (n <= 1){
        return false;
    }
    for (divisor = 2; divisor * divisor <= n; divisor++){
        if (n % divisor == 0){
            return false;
        }
        return true; // ERRORE: questo return true è DENTRO il ciclo for!
        // La funzione controlla solo se 2 divide n, e poi ritorna subito true
        // Dichiarando primi anche numeri come 9, 15, 21, 25, ecc.
    }
    // Il return true dovrebbe essere QUI, fuori dal ciclo for
}

int main(void){
    int n;

    printf("Enter a number: ");
    scanf("%d", &n);

    if (is_prime(n)){
        printf("Prime\n");
    }
    else{
        printf("Not prime\n");
    }
    
    return 0;
}