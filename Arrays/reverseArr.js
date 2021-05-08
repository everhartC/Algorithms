// Reverse
/*
Given a numerical array, reverse the order of values, in-place. 
The reversed array should have the same length, with existing elements 
moved to other indices so that order of elements is reversed. 
Working 'in-place' means that you cannot use a second 
array – move values within the array that you are given. 
As always, do not use built-in array functions such as splice().
*/
var testArray = [5,2,7,4,1,3,2];
function reverseArr(arr){
    for(var i = 0; i < arr.length/2; i++){ //Divided by 2 so once it gets 
        temp = arr[i];                     //in the middle it stops swapping
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    console.log(arr);
}
reverseArr(testArray);