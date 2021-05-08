// Filter Range
/*
Alan is good at breaking secret codes. One method is to eliminate values that 
lie within a specific known range. Given arr and values min and max, 
retain only the array values between min and max. 
Work in-place: return the array you are given, with values in original order. 
No built-in array functions.
*/
var testArray = [6,2,5,1,8,9,5,8,3,2];
console.log("Test Array for Filter Range: ", testArray)

function filterRange(arr,min,max){
    arr.length = max;
    console.log("Arr after making length = max", arr);
    for(var i = 0; i < min; i++){
        for(var x = 0; x < arr.length-1; x++){
            var swap = arr[x];
            arr[x] = arr[x+1];
            arr[x+1] = swap;
        }
        arr.pop();
    }
    console.log("Final Array", arr);
}
filterRange(testArray,2,6);