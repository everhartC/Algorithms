// - Nth2Last
/*
Return the element that is N-from-array’s-end. 
Given ([5,2,3,6,4,9,7],3), return 4. 
If the array is too short, return null.
*/
function nthToLast(arr, n){
    if(arr.length < 2){
        return null;
    }
    var temp = arr[arr.length-n];
    return temp;
}
console.log(nthToLast([2,3,4,5,6],3));