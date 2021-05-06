// 1 -- PUSH FRONT
// Given an array and an additional value, insert this value at the beginning of the array. 
// Do this without using any built-in array methods
var testArray = [4, 0, 1, 3, 5];

function pushFront(arr, val){
    for (var num = arr.length - 1; num >= 0; num--) {
        arr[num + 1] = arr[num];
    }
    arr[0] = val;
    console.log(arr);
}
pushFront(testArray, 6);