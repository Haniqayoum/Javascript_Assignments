var fName = prompt("Enter your First Name?");
var lName = prompt("Enter Your Last Name?");
var fullName = `${fName} ${lName}`
alert(fullName);


var mobileModel = prompt("Enter your fvt mobile phone model:");
var length = mobileModel.length;

document.write("My Favourite Phone is : " + mobileModel + "<br>");
document.write("Length of String :" + length + "<br><br>");


var word = "Pakistan";
console.log(word.indexOf("n"));
document.write("String : " + word + "<br>");
document.write("Index of 'n' :" + word.indexOf("n") + "<br><br>");

var greet = "Hello World";
document.write("String : " + greet + "<br>");
document.write("Last index of 'l' " + greet.lastIndexOf("l") + "<br><br>");

var string = "Pakistani";
document.write("String :" + string + "<br>");
document.write("Character at index 3:" + string.charAt(3) + "<br><br>");

// var fName = prompt("Enter your First Name?");
// var lName = prompt("Enter Your Last Name?");
// var fullName = fName.concat( "",lName , "!");
// alert(fullName);


var city = "Hyderabad";
var change = city.replace("Hyderabad", "Islamabad");
document.write("City :" + city + "<br>");
document.write("After Replacement :" + change + "<br><br>");


var sentence = "Ali and Sami are best friends. They play cricket and football together";
var Replacement = sentence.replaceAll("and", "&");
console.log(sentence);
console.log(Replacement);


var stringNum = "472";
var num = parseInt(stringNum);
document.write("Value : " + stringNum + "<br>");
document.write("Type : String " + "<br>");
document.write("Value : " + num + "<br>");
document.write("Type : number " + "<br><br>");

var dryFruit = "peanuts";
var uppercaseVar = dryFruit.toUpperCase();
document.write("User Input : " + dryFruit + "<br>");
document.write("Upper case : " + uppercaseVar + "<br><br>");

var language = "javascript";
var firstChar = language.slice(0, 1);
var remaining = language.slice(1);

var titleCase = firstChar.toUpperCase() + remaining.toLowerCase()
document.write("User Input " + language + "<br>");
document.write("Title case " + titleCase + "<br><br>");


var thirty = 35.36;
var toStrings = thirty.toString()
var result = toStrings.replace(".", "");
document.write("Number " + thirty + "<br>");
document.write("Result " + result + "<br><br>");


var userName = prompt("Enter your username :");
var valid = false;

for (i = 0; i < userName.length; i++) {
    var code = userName.charCodeAt(i);

    if (code === 33 || code === 44 || code === 46 || code === 64) {
        valid = true;
        break;
    }
}
if (valid === true) {
    alert("Please enter valid username (no @ ! , . not allowed");
} else {
    document.write("Valid Username :" + userName);
}

var input = window.prompt("What do you want to order!");
var list = ["cake", " apple pie", "cookie", " chips", "patties"];
var letter = input.toLowerCase()
var flag = false;
var index = -1;

for (var b = 0; b < list.length; b++) {
    if (list[b].toLowerCase() === letter) {
        flag = true;
        index = b;
        break;
    }
}
if (flag) {
    alert(input + " is available at index " + b + " in our bakery");
} else {
    alert("We are sorry " + input + "is not available in our bakery.")
}


var password = prompt("Enter your password:");

if (isValidPassword(password)) {
    alert("Password accepted ✅");
} else {
    alert("Invalid password! Try again.");
}


function isValidPassword(pw) {
    if (pw.length < 6)
        return false; // length rule

    var hasLetter = false;
    var hasNumber = false;

    for (var i = 0; i < pw.length; i++) {
        var code = pw.charCodeAt(i);

        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122))
            hasLetter = true;
        else if (code >= 48 && code <= 57)
            hasNumber = true;
    }

    var firstCode = pw.charCodeAt(0);
    if (firstCode >= 48 && firstCode <= 57)
        return false;

    return hasLetter && hasNumber;
}


var university = "University of Karachi";
var character = university.split("")

for(var i = 0 ; i<character.length ;i++){
console.log(character[i]);
}

var element = "Pakistan";
var tab = element.charAt(7);
document.write("User Input : "+ element+ "<br>");
document.write("Last character of index : " + tab +"<br><br>")


var text = "The quick brown fox jumps over the lazy dog";
var lowerText = text.toLowerCase();
var words = lowerText.split(" ");

var count = 0;
for (var j =0; j<words.length;j++){
    if (words[j] === "the") {
        count++;
    }
}

document.write("Text : The quick brown fox jumps over the lazy dog " + "<br>" + "There are " + count
    + " occurrence(s) of word 'the'");
