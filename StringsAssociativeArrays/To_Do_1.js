// -- Remove Blanks
/*Create a function that, given a string, returns all of 
that string’s contents, but without blanks. 
If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
*/
var testString = " Pl ayTha tF u nkyM usi c ";

function removeBlanks(fixString){
    return fixString.split(" ").join("");
}
console.log(removeBlanks(testString));


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

// -- Acronyms
/*
Create a function that, given a string, returns the 
string’s acronym (first letters only, capitalized). 
Given " there's no free lunch - gotta pay yer way. ", 
return "TNFL-GPYW". Given "Live from New York, 
it's Saturday Night!", return "LFNYISN".
*/
var testString = " there's no free lunch - gotta pay yer way. ";

function acronyms(str){
    str = str.split(" ");
    var strTemp = "";
    for(var i = 0; i < str.length; i++){
        if(str[i] == ""){
            continue;
        } else {
            strTemp += str[i][0].toUpperCase();
        }
    }
    return strTemp;
}
console.log("Acronyms:", acronyms(testString));


// -- Count None-Spaces
/*
Accept a string and return the number of non-space characters found in the string. 
For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
*/

var testString = "Honey pie, you are driving me crazy";

function countNoneSpaces(str) {
    var str = str.split("");
    var count = 0;
    for (var ind = 0; ind < str.length; ind++) {
        if (str[ind] == false) {
            continue;
        } else {
            count++;
        }
    }
    return count;
}
console.log("Count None-Spaces: ", countNoneSpaces(testString));

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