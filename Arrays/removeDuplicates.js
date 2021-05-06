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