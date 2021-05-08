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