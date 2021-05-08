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

// Rotate
/*
Implement rotateArr(arr, shiftBy) that accepts array and offset. 
Shift arr's values to the right by that amount. 
'Wrap-around' any values that shift off array's end to the other side, 
so that no data is lost. Operate in-place: given ([1,2,3],1), 
change the array to [3,1,2]. Don't use built-in functions.
Second: allow negative shiftBy (shift L, not R).
Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
Fourth: minimize the touches of each element.
*/
var testArray = [5,2,7,4,1,3,2];
console.log("initial test array: ", testArray)
function rotateArr(arr, shiftBy){
    for(var i = 0; i < shiftBy; i++){
        var temp = arr[arr.length - 1];
        for(var j = arr.length - 1; j > 0; j--){
            arr[j] = arr[j - 1];
        }
        arr[0] = temp;
    }
    console.log(arr);
}
rotateArr(testArray, 3);


// Filter Range
/*
Alan is good at breaking secret codes. One method is to eliminate values that 
lie within a specific known range. Given arr and values min and max, 
retain only the array values between min and max. 
Work in-place: return the array you are given, with values in original order. 
No built-in array functions.
*/
var testArray = [6,2,5,1,8,9,5,8,3,2];
console.log("Test Array for Filter Range: ", testArray)

function filterRange(arr,min,max){
    arr.length = max;
    console.log("Arr after making length = max", arr);
    for(var i = 0; i < min; i++){
        for(var x = 0; x < arr.length-1; x++){
            var swap = arr[x];
            arr[x] = arr[x+1];
            arr[x+1] = swap;
        }
        arr.pop();
    }
    console.log("Final Array", arr);
}
filterRange(testArray,2,6);


// Concat
/*
Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. 
Return a new array containing the first array's elements, followed by the second array's elements. 
Do not alter the original arrays. 
Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
*/
var arr1 = [1,2,3,4];
var arr2 = [5,6,7,8];

function concatArr(arr1, arr2){
    var newarr = [];
    // newarr.length = arr1.length + arr2.length;
    for(var i = 0; i < arr1.length; i++){
        newarr.push(arr1[i]);
    }
    for(var j = 0; j < arr2.length; j++){
        newarr.push(arr2[j]);
    }
    console.log(newarr);
}
concatArr(arr1, arr2);