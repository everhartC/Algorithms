// - Zibonacci
/*
This function borrows ideas from the Fibonacci series, 
but the calculated results appear to zig and zag, hence the name. 
A so-called ‘Zibonacci’ series would be defined by the following rules:

Zib(0) == 1;
Zib(1) == 1;
Zib(2) == 2;
Zib(2n+1) == Zib(n)+Zib(n-1)+1, if n > 0 (i.e. odd values 3 and higher);
Zib(2n) == Zib(n)+Zib(n+1)+1, if n > 1 (i.e. even values 4 and higher).
Create the Zibonacci(num) function. What is Zibonacci(10)? Zibonacci(100)?

Second: For a given number that might be a Zibonacci result, find the largest index that maps to that result. bestZibNum(3186) == 2467, bestZibNum(3183) == null.
*/

function zibonacci(num) {
    if(num == 0) {
        return 1;
    }
    if(num == 1) {
        return 1;
    }
    if(num == 2) {
        return 2;
    }
    // check for odd values with num%2 == 0
    if (num%2 != 0) {
        var N = (num-1)/2;
        return zibonacci(N) + zibonacci(N - 1) + 1;
    }
    if (num%2 == 0) {
        var N = num/2;
        return zibonacci(N) + zibonacci(N + 1) + 1;
    }
}

console.log(zibonacci(10));
console.log(zibonacci(100));