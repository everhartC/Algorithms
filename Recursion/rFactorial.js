// - Recursive Factorial 
/*
Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. 
If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).
*/

function rFact(x){
    if(x <= 1){
        return 1;
    }
    if(Number.isInteger(x)){
        return rFact(x-1) * x;
    }
    else {
        x = ~~x;
        return rFact(x-1)*x
    }
}
console.log(rFact(3));
console.log(rFact(6.5));
console.log(rFact(-7.89));
