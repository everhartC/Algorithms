// -- Min to Front
/*
Given an array of comparable values, move the lowest element to array’s front, 
shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. 
Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 
As always, do this without using built-in functions.
*/
function min2front(arr){
    var min = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
            arr[i] = arr[0];
            arr[0] = min;
        }
    }
    console.log(arr);
}
var testArray = [4,2,1,3,5];
console.log(testArray);
min2front(testArray);