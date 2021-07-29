// 1 : Reverse
/* 
Implement reverseString(str) that, given string, returns that string with characters reversed.
Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!
*/ 
// str = "creature"

// function reverseString(str) {
//     let newStr = '';
//     for ( let i = str.length-1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr
// }

// console.log(reverseString(str));

// 2: Remove Even-Length Strings
/*
Build a standalone function to remove strings of even lengths from a given array. For array containing
["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."], 
change that same array to ["Nope!","Its","Chris","."].
*/

strArr = ["Nope!", "Its", "Kris", "starting", "with", "K!","(instead", "of", "Chris", "with", "C"];

// function removeEvenStrings(strArr){
//     for ( var i = strArr.length-1; i > 0; i--){
//         if (strArr[i].length % 2 == 0) { // if even
//             for ( var j = i; j < strArr.length-1; j++){
//                 var temp = strArr[j];
//                 strArr[j] = strArr[j+1];
//                 strArr[j+1] = temp; // move current value to end of array THEN pop
//             }
//             strArr.pop();
//         }
//     }
//     return strArr;
// }
// console.log(removeEvenStrings(strArr));



//3 : Integer to Roman Numeral
/*
Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. 
In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, 
349 is CCCIL and 444 is CDXLIV.
*/
var num = 245;

// console.log(numLength);

function int2Roman(num){
    var numLength = num.toString();
    numLength = numLength.length;
    var romNums = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    var roman = ""
    // console.log(Object.entries(romNums).reverse());
    // for ( const [key, value] of Object.entries(romNums)) {
        // console.log(`${key}: ${value}`);
    // }
    while (num > 0 ) {
        for (const [key, val] of Object.entries(romNums).reverse()) {
            // val = val.reverse();
            if ( val <= num ){
                roman += key;
                console.log("KEY:", key);
                num -= val;
                console.log("VAL:", val);
            };
            
        };
        return roman;
    }
    return roman;
}

console.log(int2Roman(num));