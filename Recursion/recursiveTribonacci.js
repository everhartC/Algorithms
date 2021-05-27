// - Recursive "Tribonacci"
/*
Write function rTrib(num) to mimic Fibonacci, adding previous three values instead of two. 
First three Tribonacci numbers are 0, 0, 1, 
so rTrib(3) = 1 (0+0+1); rTrib(4) = 2 (0+1+1); rTrib(5) = 4 (1+1+2); rTrib(6) = 7 (1+2+4).
Handle negatives and non-integers appropriately and inexpensively.
*/

function rTrib(num) {
    var intNum = Math.trunc(num);
    if (intNum <= 1) {
        return 0;
    }
    if (intNum == 2) {
        return 1;
    }
    return rTrib(intNum-1) + rTrib(intNum-2) + rTrib(intNum-3);
}

console.log(rTrib(3));
console.log(rTrib(4));
console.log(rTrib(5));
console.log(rTrib(6));
