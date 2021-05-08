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