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