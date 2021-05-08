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
