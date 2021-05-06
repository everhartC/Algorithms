// 3 -- Insert At
/* 
Given an array, index, and additional value, 
insert the value into the array at the given index. 
Do this without using builin methods. Think of
PushFront(arr, val) as equivalent to InsertAt(arr, 0, val)
*/
var testArray = [4, 0, 1, 3, 5];
function insertAt(arr, idx, val){
    for (var i = 0; i <= idx; i++){
        arr[idx] = val;
    }
    console.log(arr);
}
insertAt(testArray, 1, 9);