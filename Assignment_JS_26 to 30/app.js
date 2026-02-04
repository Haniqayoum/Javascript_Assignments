var num = 3.45214;
document.write("Number: "+ num + "<br>");
var roundOff = Math.round(num);
document.write("Round off value: "+ roundOff + "<br>");
var floor = Math.floor(num);
document.write("Floor value: "+ floor + "<br>");
var ceil = Math.ceil(num);
document.write("Ceil value: "+ ceil+"<br><br>");

var num2 = -2.673;
document.write("Number: "+ num2 + "<br>");
var roundOff = Math.round(num2);
document.write("Round off value: "+ roundOff + "<br>");
var floor = Math.floor(num2);
document.write("Floor value: "+ floor + "<br>");
var ceil = Math.ceil(num2);
document.write("Ceil value: "+ ceil+"<br><br>");

var absValue = -4;
document.write("The absolute value of "+ absValue + " is " + Math.abs(absValue)+ "<br><br>");


var dice = Math.floor(Math.random() * 4)+1;
document.write("Random dice value: "+ dice + "<br>");
var dice2nd = Math.floor(Math.random() * 6)+1;
document.write("Random dice value: "+ dice2nd + "<br><br>");

var head = Math.floor(Math.random() * 2)+1;
document.write("Head Or Tail" + "<br>" +"Random coin value: " +head + "<br>");
var tail = Math.floor(Math.random() * 1)+1;
document.write("Random coin value: "+tail + "<br><br>");

var randomNum = Math.floor(Math.random() * 100)+1;
document.write("Random number between 1 and 100: "+ randomNum + "<br><br>");

var user = prompt("Enter your weight in kilograms: ");
var userW = parseFloat(user).toFixed(2);
document.write("The weight of user is "+ userW + " Kilograms<br><br>");


var secretNum = Math.floor(Math.random() * 10) +1;

var userGuess = prompt("Guess a secret number between 1 to 10: ");

if (userGuess === secretNum) {
   alert("🎉 Congratulations! You guessed the correct number.");
} else{
    alert ("❌ Sorry the secret number was : " + secretNum);
    
}