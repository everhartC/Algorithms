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


// 2 -- Pop Front
// Given an array, remove and return the value at the beginning of the array. 
// Can only use .pop() 
var testArray = [4, 0, 1, 3, 5];
function popFront(arr){
    var temp = arr[0]
    console.log(temp)
}
popFront(testArray);

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

// 5 -- Swap Pairs
/*
Swap positions of successive pairs of values of given array. 
If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. 
For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
As with all array challenges, do this without using any built-in array methods.
*/
function swapPairs(arr){
    if (arr.length % 2 == 0){  // EVEN
        for (var i = 0; i < arr.length; i+=2){ //arr.length is NOT -1 for EVENS Go all the way to the end.
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    } else {  // ODD
        for (var i = 0; i < arr.length -1; i+=2){
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return arr;
}
var arr1 = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4, 5];
console.log(swapPairs(arr1));
console.log(swapPairs(arr2));

// 6 -- Remove Duplicates
/*
Sara is looking to hire an awesome web developer and has received applications from various sources. 
Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. 
Because array elements are already in order, all duplicate values will be grouped together. 
As with all these array challenges, do this without using any built-in array methods.
*/
var testArray = [4, 1, 1, 1, 4, 4, 0, 1, 3, 3, 3, 5];
function removeDuplicates(arr){
    var idx = 0;
    var count = 1;
    while (count < arr.length){
        if (arr[idx] == arr[count]){
            count++;
        } else {
            arr[idx + 1] = arr[count];
            idx++;
            count++;
        }
    }
    for (var i = 0; i < idx - 1; i++){
        arr.pop();
    }
    return arr;
}
console.log(removeDuplicates(testArray));