// 4 -- Remove At
/* 
Given an array and index, remove and return the array value
at that index. Do this without using builin methods except pop()
*/
var testArray = [4, 0, 1, 3, 5];
function removeAt(arr, idx){
    var val = arr[idx];
    for (var i = idx; i < arr.length - 1; i++){
        var tempArr = arr[i];
        arr[i] = arr[i + 1];
        arr[i+1] = tempArr;        
    }
    arr.pop();
    return val;
}
console.log(removeAt(testArray, 2));
console.log(testArray);