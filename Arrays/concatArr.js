// Concat
/*
Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. 
Return a new array containing the first array's elements, followed by the second array's elements. 
Do not alter the original arrays. 
Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
*/
var arr1 = [1,2,3,4];
var arr2 = [5,6,7,8];

function concatArr(arr1, arr2){
    var newarr = [];
    // newarr.length = arr1.length + arr2.length;
    for(var i = 0; i < arr1.length; i++){
        newarr.push(arr1[i]);
    }
    for(var j = 0; j < arr2.length; j++){
        newarr.push(arr2[j]);
    }
    console.log(newarr);
}
concatArr(arr1, arr2);