// -- Remove Shorter Strings
/*
Given a string array and value (length), 
remove any strings shorter than the length from the array.
*/

var testString = ["I", "really", "really", "need", "to", "go", "to", "bed"];

function removeShortStr(strArr, len) {
    for (var ind = strArr.length-1; ind >= 0; ind--) {
        if (strArr[ind].length < len) {
            for (var i = ind; i < strArr.length-1; i++){
                var temp = strArr[i];
                strArr[i] = strArr[i+1];
                strArr[i+1] = temp;
            }
            strArr.pop();
        }
    }
    return strArr;
}
console.log("Remove Shorter Strings: ", removeShortStr(testString, 4));