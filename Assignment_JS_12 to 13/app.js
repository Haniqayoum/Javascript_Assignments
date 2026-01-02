//Que 1
// var character = "";
var userInput = prompt("Enter an Alphabet for check key code:");
if (userInput === "A") {
    alert("65");
}
else if (userInput === "B") {
    alert("66");
}
else if (userInput === "C") {
    alert("67");
}
else if (userInput === "D") {
    alert("68");
}
else if (userInput === "E") {
    alert("69");
}
else if (userInput === "F") {
    alert("70");
}
else if (userInput === "G") {
    alert("71");
}
else if (userInput === "H") {
    alert("72");
}
else if (userInput === "I") {
    alert("73");
}
else if (userInput === "J") {
    alert("74");
}
else if (userInput === "K") {
    alert("75");
}
else if (userInput === "L") {
    alert("76");
}
else if (userInput === "M") {
    alert("77");
}
else if (userInput === "N") {
    alert("78");
}
else if (userInput === "O") {
    alert("79");
}
else if (userInput === "P") {
    alert("80");
}
else if (userInput === "Q") {
    alert("81");
}
else if (userInput === "R") {
    alert("82");
}
else if (userInput === "S") {
    alert("83");
}
else if (userInput === "T") {
    alert("84");
}
else if (userInput === "U") {
    alert("85");
}
else if (userInput === "V") {
    alert("86");
}
else if (userInput === "W") {
    alert("87");
}
else if (userInput === "X") {
    alert("88");
}
else if (userInput === "Y") {
    alert("89");
}
else if (userInput === "Z") {
    alert("90");
}
else if (userInput === "a") {
    alert("97");
}
else if (userInput === "b") {
    alert("98");
}
else if (userInput === "c") {
    alert("99");
}
else if (userInput === "d") {
    alert("100");
}
else if (userInput === "e") {
    alert("101");
}
else if (userInput === "f") {
    alert("102");
}
else if (userInput === "g") {
    alert("103");
}
else if (userInput === "h") {
    alert("104");
}
else if (userInput === "i") {
    alert("105");
}
else if (userInput === "j") {
    alert("106");
}
else if (userInput === "k") {
    alert("107");
}
else if (userInput === "l") {
    alert("108");
}
else if (userInput === "m") {
    alert("109");
}
else if (userInput === "n") {
    alert("110");
}
else if (userInput === "o") {
    alert("111");
}
else if (userInput === "p") {
    alert("112");
}
else if (userInput === "q") {
    alert("113");
}
else if (userInput === "r") {
    alert("114");
}
else if (userInput === "s") {
    alert("115");
}
else if (userInput === "t") {
    alert("116");
}
else if (userInput === "u") {
    alert("117");
}
else if (userInput === "v") {
    alert("118");
}
else if (userInput === "w") {
    alert("119");
}
else if (userInput === "x") {
    alert("120");
}
else if (userInput === "y") {
    alert("121");
}
if (userInput === "z") {
    alert("122");
}

//Que 1 another method
// var input = prompt("Enter a character:");
// var code = input.charCodeAt(0);
// //uppercase letter
// if (code >= 65 && code <= 90) {
//     alert ("The input is an Uppercase Letter");
// } //lowercase letter
//  else if (code >= 97 && code <= 122) {
//     alert ("The input is an lowercase letter");
// } else{
//     alert ("The input is neither a number nor a letter");
// }

//Que 2
var num1 = parseInt(prompt("Enter first integar:"));  //parseInt used for convert number from string
var num2 = parseInt(prompt("Enter second integar:"));
if (num1 > num2) {
    alert("The larger number is: " + num1);
} else if (num2 > num1) {
    alert("The larger number is: " + num2);
} else {
    alert("Both numbers are equal.");
}

//Que 3
var number = parseInt(prompt("Enter a number: (Positive Or Negative)"));
if (number < 0) {
    alert("The number is negateive.");
} else if (number > 0) {
    alert("The number is positive.");
} else {
    alert("The number is zero.");
}

//Que 4
var vowel = prompt("Enter a character: (Vowel Check)");
vowel = vowel.toLocaleLowerCase();
if (vowel === 'a' || vowel === 'e' || vowel === 'i' ||
    vowel === 'o' || vowel === 'u') {
    alert("True");
} else {
    alert("False");
}

//Que 5
var password = "Saylani";
var userPass = prompt("Enter Lab PC Password:");
if (userPass === password) {
    alert("Correct! The password you entered are matches original password.");
} else {
    alert("Incorrect Password.");
}

//Que 6
var greeting;
var hour = 12;
if (hour < 12) {
greeting = "Good Morning";
    alert("Good Morning");
} else if (hour < 18 ) {
    greeting = "Good Afternoon";
    alert("Good Afternoon");
} else {
    greeting = "Good evening";
}

//Que 7
var time = parseInt(prompt("Enter time in 24 hours format: (e.g., 1900 = 7pm)"));
if (time >= 0 && time < 1200) {
    alert ("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    alert ("Good Afternoon!");
} else if (time >= 1700 && time< 2359) {
    alert ("Good Evening!");
} else {
    alert ("Invalid time entered!");
} 