// 5 -- Swap Pairs
/*
Swap positions of successive pairs of values of given array. 
If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. 
For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
As with all array challenges, do this without using any built-in array methods.
*/
function swapPairs(arr){
    if (arr.length % 2 == 0){  // EVEN
        for (var i = 0; i < arr.length; i+=2){ //arr.length is NOT -1 for EVENS Go all the way to the end.
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    } else {  // ODD
        for (var i = 0; i < arr.length -1; i+=2){
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return arr;
}
var arr1 = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4, 5];
console.log(swapPairs(arr1));
console.log(swapPairs(arr2));