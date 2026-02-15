var currentdate = new Date();
console.log(currentdate);
document.write(currentdate + "<br><br>");

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName.concat(" ", lastName);
document.write("Welcome " + fullName + "<br><br>");

function sum(a, b) {
    var ans = parseInt(a) + parseInt(b);
    console.log(ans);
    return ans;
}
sum(
    prompt("Enter first number"),
    prompt("Enter second number")
);

function calculator(){
   var num1 = Number(prompt("Number for calculation"));
   var num2 = Number(prompt("Number for calculation"));
   var operator = prompt("Enter operator ( + , - , * , / )");

   var operation = "";
   if (operator == "+") {
    operation = num1 + num2;
   } else if (operator == "-") {
    operation = num1 - num2;
   } else if (operator == "*") {
    operation = num1 * num2;
   } else if(operator == "/") {
    operation = num1 / num2;
   } else{
    operation = "Invalid Operator";
   }
   alert (num1 + " " + operator + " " + num2 + " = " + operation);
   return operation;
}
var result = calculator();
//alert (num1 + " " + operator + " " + num2 + "=" + result);

function square (num) {
    var ans = num** 2;
    console.log(ans);
    return ans;
}
square(5);

function factorial(u){
    var result = 1;
    for( var i = 1; i<= u; i++){
        result *= i;
        console.log(result);        
    }
}
factorial(5);

function counting(){
    var start =Number(prompt("Counting start from"));
    var end = Number(prompt("Counting end at"));
    for (var i = start; i <= end; i++){
        document.write(i + "<br>");
    }
}
counting();

function calculateHypotenuse( b , p){
    function calculateSquare(num){
        return num ** 2;
    }
    var hypotenuse = calculateSquare(b) + calculateSquare(p);
    console.log(hypotenuse);    
}
calculateHypotenuse(3,4);

function calculateArea (w , h){
    var area = w * h;
    return area;
}
console.log(calculateArea(5,10));

function calculateArea (width , height){
    var A = width * height;
    return A;
} 
var w = 7;
var h = 4;

console.log(calculateArea(w,h));


function palindrome(){
    var word = prompt("Enter a word to check if it's palindrome or not");
    var reverse = "";
    for (var i = word.length -1; i>=0; i--){
       reverse += word[i]; 
    }
    if (word == reverse) {
        document.write("<br>" +word + " is a palindrome word<br>");
    } else{
          document.write(word + " is not a palindrome word" +"<br><br>");
    }
}
palindrome();

function capitalizeWords(store){
    var result = "";
    var capialize = true;
    for ( var i = 0; i < store.length; i++){
        var char = store[i];
        if (char === " "){
            result += char;
            capialize = true;
        } else if (capialize){
            result += char.toUpperCase();
            capialize = false;
        } else{
            result += char;
        }
    } 
    return result;
}
document.write("the quick brown fox" + "<br>");
document.write(capitalizeWords("the quick brown fox") + "<br><br>");


function findLongestWord(para){
    var words = para.split(" ");
    var longest = "";

    for ( var i = 0; i < words.length; i++){
        if (words[i].length > longest.length ){
            longest = words[i];
        }
    }
    return longest;
}
//console.log(findLongestWord("Umm-e-hani Abdul Qayoom"));
//console.log(findLongestWord("Web Development Tutorial"));
document.write("Web Development Tutorial" + "<br>");
document.write("Longest word is: " + findLongestWord("Web Development Tutorial") + "<br><br>");

function countVowels(string , letter){
    var count =0;

    for (var i = 0; i< string.length; i++){
        if (string[i] === letter) {
            count++;
        }
    }
    return count;
}
var result = countVowels("Ummehani A.Qayoom" , "m");
console.log(result);
document.write("Ummehani A.Qayoom" + "<br>");
document.write("Number of m in the string is " + result + "<br><br>");


function calcCircumference(radius){
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference);   
}

function calcArea (radius){
    var area = Math.PI * radius *radius;
    console.log("The area is " + area);
}

calcCircumference(4);
calcArea(4);


//-------End--------//
