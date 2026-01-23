#include <stdio.h>

int main() {
    
    int row,i=1;
    printf("enter a Number: ");
    scanf("%d", &row);
    
    while(row>0){
      
        int square = i*i;
        printf("the square of %d is %d\n", i, square);
         
        row--;
        i++;
    }
}