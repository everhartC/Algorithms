// - Recursive Sigma
/*
Write a recursive function that given a number returns the sum of integers from 1 to that number.
Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
*/

function rSigma(x){
    if(x === 1){
        return 1;
    }
    return rSigma(x - 1) + x;
}

console.log(rSigma(5));