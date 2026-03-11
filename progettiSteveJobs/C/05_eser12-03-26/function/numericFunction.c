#include <stdio.h>
#include <stdlib.h> 
int isEven(int x){
    if(x % 2 == 0){
        printf("the number is even \n");
     return 1;
    }else{
        printf("The number %d is odd\n", x);
        return 0;
    }
    
}
int absInt(int x){
    
    return abs(x);

    // int result;
    // if(x < 0){
    //     return result =-x;
    // }
    // else{
    //     return result = x;
    // }
}
int max2(int x, int y){
    if( x > y ){
        return x;
    }
    else{
        return y;
    }
}
int main() {
    int a = -10;
    int b = 5;

    printf("the absolute number of %d: is %d\n", a, absInt(a));
    
    int max = max2(a, b);
    printf("the gretest number between %d and %d is: %d\n", a, b, max);

    isEven(max);

    return 0;
}
