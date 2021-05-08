// -- Get Digits
/*
Create a JavaScript function that given a string, 
returns the integer made from the string’s digits. 
Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.
*/
var testString = "0s1a3y5w7h9a2t4?6!8?0";

function getDigits(str){
    var strArray = str.split("");
    var strTemp = "";
    for(var i = 0; i < strArray.length; i++){
        if(strArray[i]%1 == 0){
            strTemp += strArray[i];
        }
    }
    return strTemp/1;
}
console.log("Get Digits:", getDigits(testString));