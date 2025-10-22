// Ans 1
var a = 2;
var b = 3;
function power(a,b) {
   return a ** b;
}
console.log(power(2,3));
var result = a ** b;

// Ans 2
var input = prompt("Enter a year:");
var year = parseInt(input);

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0 ) || (year % 400 === 0)) {
        return true; //leap year
    } else {
        return false;
    }
}

 console.log(isLeapYear(year));

// Ans 3
function semiperimeter(a, b, c) {
    return(a + b + c) /2;
}

function areaOfTriangle(a, b, c) {
    var s = semiperimeter(a, b, c);
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;   
}
 
var choice;
do {
    choice = parseInt(prompt("1.Calculate Area\n2. Exit\nEnter your choice:"));
switch (choice) {
    case 1:
        var a = parseFloat(prompt("Enter side a:"));
        var b = parseFloat(prompt("Enter side b:"));
        var c = parseFloat(prompt("Enter side c:"));
        if (a + b > c && b + c > a && c + a >b){
            var area = areaOfTriangle(a, b, c,);
            alert("Area of triangle:" + area.toFixed(2)); 
        } else {
            alert("Invalid Triangle Sides!");
        }
        break;
case 2:
    alert("No Other Option :)");
    break;
    default:
    alert("Invalid Choice!");
        break;
}
} while (choice !==2);

//Ans 4

// Function to caculate average
function findAverage(m1 , m2, m3){
      return (m1 + m2 + m3) / 3;
}

// function to calculate percentage (out of 100 marks per subject)
function findPercentage(m1, m2, m3) {
var total = m1 + m2 + m3;
return (total / 300) *  100;  //total marks = 3 subjects * 100 marks     
}

// //Main Function
 function mainFunction() {
    var m1 = parseFloat(prompt("Enter marks of subject 1:"));
    var m2 = parseFloat(prompt("Enter marks of subject 2:"));
    var m3 = parseFloat(prompt("Enter marks of subject 3:"));

    var avg = findAverage(m1, m2, m3);
    var per = findPercentage(m1, m2, m3);

   alert("Average Marks:" + avg.toFixed(2) + "\nPercentage:" + per.toFixed(2) + "%");
}
//call main function
mainFunction();

// Que 5
function customIndexOf(str,char) {
    for (var i = 0; i< str.length; i++){
        if (str [i] === char) {
            return i; 
        }
    }
    return -1;
}
console.log(customIndexOf("Hello Hanii" , "n"));

// Ans 6
function deleteVowels(sentence) {
    var vowels = "aeiouAEIOU";
    var result = "";

    for (var i =0;  i < sentence.length; i++) {
   if (vowels.indexOf(sentence[i]) === -1) {
    result += sentence[i];
    }    
    }

    return result;
}
console.log(deleteVowels("A ceasefire in Phalestine brings hope for peace and relief to countless innocent lives affected by the conflict"));

// Ans 7
function countVowelPairs(text) {
  var count = 0;
  text = text.toLowerCase();

  for (var i = 0; i < text.length - 1; i++) {
    var first = text[i];
    var second = text[i + 1];

    switch (true) {
      case (isVowel(first) && isVowel(second)):
        console.log(first + second); // print only vowel pairs
        count++;
        break;
    }
  }

  return count;
}

function isVowel(ch) {
  return "aeiou".indexOf(ch) !== -1;
}

console.log(countVowelPairs("Pleases read this application"));

// Ans 8
function toMeters(km) {
    return km * 1000;
}

function toFeet(km) {
    return km * 3280.84;
}

function toInches(km) {
    return km * 39370.1;
}

function toCentimeters(km) {
    return km * 100000;
}

var distanceKm = parseFloat(prompt("Enter distance between two cities (in km)"));

console.log("Distance in kilometers:" + distanceKm);
console.log("In Meters:" + toMeters(distanceKm));
console.log("In Feet:" + toFeet(distanceKm));
console.log("In Inches:" + (distanceKm));
console.log("In Centimeters:" + toCentimeters(distanceKm));

//Ans 9
var hoursWorked = parseInt(prompt("Enter total hours worked by employee:"));
var overtimePay = 0;

if (hoursWorked > 40) {
    var overtimeHours = hoursWorked - 40;
    overtimePay = overtimeHours * 12;  //overtime pay rate 
}

console.log("Total hours worked:" + hoursWorked);
console.log("Overtime pay: Rs." + overtimePay);


//Ans 10
var amount = parseInt(prompt("Enter amount to withdraw(in rupees):"));

var note100 = Math.floor(amount / 100);
amount = amount % 100;

var note50 = Math.floor(amount / 50);
amount = amount % 50;

var note10 = Math.floor(amount / 10);

console.log("Currency notes of 100:" + note100);
console.log("Currency of 50:" + note50);
console.log("Currency of 10:" + note10);



