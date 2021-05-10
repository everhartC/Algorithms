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