// - Remove Negatives
/*
Implement removeNegatives() that accepts an array, 
removes negative values, and returns the same array 
(not a copy), preserving non-negatives’ order. 
As always, do not use built-in array functions.
*/
function removeNegatives(arr){
    for (var i = arr.length-1; i >= 0; i--){
        if (arr[i] < 0){
            for (var x = i; x < arr.length -1; x++){
                var temp = arr[x];
                arr[x] = arr[x+1];
                arr[x+1] = temp;
            }
            arr.pop();
            console.log(arr);
        }
    }
}
var testArray = [-4, 0, 8, 5, 3, -7, -2];
removeNegatives(testArray);


// - Second to Last
/*
Return the second-to-last element of an array. 
Given [42,true,4,"Kate",7], return "Kate". 
If array is too short, return null.
*/
function secondToLast(arr){
    if (arr.length < 2){
        return null;
    }
    return arr[arr.length-2];
}
var arr1 = [4, 7, "cameron", false, -4, "Hello"];
console.log(secondToLast(arr1));


// - Second Largest
/*
Return the second-largest element of an array. 
Given [42,1,4,Math.PI,7], return 7. 
If the array is too short, return null.
*/
function secondLargest(arr){
    if (arr.length < 2){
        return null;
    } else {
        var max;
        var max2;
        if(arr[0] > arr[1]){ // initialize just like min algorithm
            max = arr[0];
            max2 = arr[1];
        } else {
            max = arr[1];
            max2 = arr[0];
        }
        for(var i = 2; i < arr.length; i++){
            if(arr[i] > max){
                max2 = max;
                max = arr[i];
            } else if (arr[i] > max2){
                max2 = arr[i];
            }
        }
    }
    return max2;
}
var arr1 = [2,3,6,15,70,20];
console.log(secondLargest(arr1));

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