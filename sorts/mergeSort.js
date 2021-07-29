var arr = [5,4,1,8,7,2,6,3];

function mergeSort(arr){
    var C = [];
    var A = arr.slice(0,arr.length/2);
    var B = arr.slice(arr.length/2, arr.length);
    // console.log("A: ", A, "B: ", B);
    var i = 0;
    var j = 0;

    for ( var k = 0; k < arr.length-1; k++) {
        if ( A[i] < B[j]){
            C[k] = A[i];
            i++;
            console.log(C);
        } else {
            C[k] = B[j];
            j++;
        };
    };
    return C;
}

console.log(mergeSort(arr));


// RECURSION TREE
/*
at each level j=0,1,2,..., log2n, there are 2j subproblems, each of size n/2j

<= 6nlog2n + 6n

Guiding Principle #1
"worst-case analysis": our running time 
bound holds for every input of length n

As opposed to 
- "average-case" analysis
- banchmarks

Guiding Principles #2
Won't pay much attention to constant factors,
lower-order terms

Guiding Principles #3:
Asymptomatic analysis: Focus on runing for large input sizes n.
i.e. 6n log2n + 6n "better than" 1/2n2=insertion sort


WHAT IS A FAST ALGORITHM?
This course: adopt these three biases as guiding princeples
fast algorithm ~~ worse-case running, time grows slowly with input size

*/