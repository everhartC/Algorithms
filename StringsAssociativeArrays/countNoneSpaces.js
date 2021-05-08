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