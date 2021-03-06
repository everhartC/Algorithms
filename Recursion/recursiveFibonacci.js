// - Recursive Fibonacci 
/*
Write rFib(num). Recursively compute and return numth Fibonacci value. 
As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: 

rFib(2) = 1 (0+1); 
rFib(3) = 2 (1+1); 
rFib(4) = 3 (1+2); 
rFib(5) = 5 (2+3).rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.
*/

function rFib(num) {
    if (num == 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    return rFib(num-1) + rFib(num-2);
}
console.log(rFib(3));
console.log(rFib(2));
console.log(rFib(4));



