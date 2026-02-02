#include <stdio.h>

int main() {
    printf("\n exercise n1 \n");

    int n;
    
    printf("Enter a integer number: ");
    scanf("%d", &n);

    if(n > 0){
        printf("the number is positive");
    }
    else if(n < 0){
        printf("the number is negative");
    }
    else{
        printf("the number is zero");  
    }        

        return 0;
}