// - Reverse String
/* 

Implement reverseString(str) that, given string, 
returns that string with characters reversed.
Given "creature", return "erutaerc". 
Tempting as it seems, do not use the built-in reverse()!
*/
function reverseString(str){
    str = str.split("");
    for(var i = 0; i < str.length/2; i++){
        var temp = str[i];
        str[i] = str[str.length-1-i];
        str[str.length-1-i] = temp;
    }
    return str.join("");
}
var arr1 = "Cameron";
console.log(reverseString(arr1));

// - Remove Even-Length Strings
/* 
Build a standalone function to remove strings of even lengths 
from a given array. For array containing 
["Nope!","Its","Kris","starting","with","K!","
(instead","of","Chris","with","C)","."],
change that same array to ["Nope!","Its","Chris","."].
*/
function removeEvenStrings(strArray){
    for(var i = strArray.length - 1; i > 0; i--){
        if(strArray[i].length % 2 == 0){
            for(var j = i; j<strArray-1; j++){
                var temp = strArray[i];
                strArray[i] = strArray[i+1];
                strArray[i+1] = temp;
            }
            strArray.pop();
        }
    }
    return strArray;
}
console.log(removeEvenStrings(["hello", "there", "what's", "your", "name?"]));


