// - Recursive Binary Search
/*
Given a sorted array and a value, recursively determine whether value is found within array. 

rBinarySearch([1,3,5,6],4) = false; 
rBinarySearch([4,5,6,8,12],5) = true.
*/

function rBinarySearch(arr, num) {
    var midArr = Math.trunc(arr.length/2);

    if (arr[midArr] == num) {
        return true;
    }
    if (num < arr[midArr] && arr.length > 1) {
        return rBinarySearch(arr.slice(0, midArr), num);
    }
    else if (num > arr[midArr] && arr.length > 1) {
        return rBinarySearch(arr.slice(midArr, arr.length), num);
    } else {
        return false;
    }
} 

console.log(rBinarySearch([1,3,5,6],4));
console.log(rBinarySearch([4,5,6,8,12],5));
