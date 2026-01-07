//Que 1
var literalNotation = [undefined];

//Que 2
var objNotation = {};

//Que 3
var stringsArr = ["Apple", "Peach", "Mango"];
console.log(stringsArr[0]);
console.log(stringsArr[1]);
console.log(stringsArr[2]);

//Que 4
var numArr = [1, 2, 3, 4, 5];
console.log(numArr);  //entire array
console.log(numArr[0]); //each element
console.log(numArr[1]);
console.log(numArr[2]);
console.log(numArr[3]);
console.log(numArr[4]);

//Que 5
var booleanArr = [true, false, true, false];
console.log(booleanArr); //entire array
console.log(booleanArr[1]); //false
booleanArr.unshift(false); // add element at start not removes
//booleanArr.shift(); //removes first element and add new element at start
console.log(booleanArr);

booleanArr.push(true);  //adds true at the end and booleanArr.pop(true); deletes last element
console.log(booleanArr);

//Que 6
var mixedArr = [undefined, 123, "Hello", true, { name: "Hanii" }];
console.log(mixedArr);

//mixedArr.splice(1,0,"Months");  insert = undefined, "Months", 123, ....
//mixedArr.splice(1 , 1, 22); replace = undefined, 22,"Hello",...
//mixedArr.splice(1,2); remove = undefined, true ...
//console.log(mixedArr);


//Que 7
var qualifications = ["SSC", "HSC", "BCS",
    "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<ol>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ol>" + "<br>");

//Que 8
var studNames = ["Hanii", "Ayesha", "Sana"];
var scores = [420, 380, 450];
var totalMarks = 500;

for (var i = 0; i < studNames.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    document.write("Que.8 <br><b>Student Name:</b> " + studNames[i] + "<br> <br>");
    document.write("<b>Score:</b> " + scores[i] + " / " + totalMarks + "<br> <br>");
    document.write("<b>Percentage:</b> " + percentage.toFixed(2) + "%<br>");
    document.write("<hr>");
}

//Que 9
var colors = ["Red ", " Blue ", " Purple ", " Black "];
document.write("Que.9<br><h3>Colors : </h3>" + colors + "<br><br>");

var addColorstart = prompt("Which color you want to add at the beginning ?");
colors.unshift(addColorstart);
document.write("<h3>Adds color at the start : </h3>" + colors + "<br><br>");

var addColorend = prompt("Which color you want to add at the end ?");
colors.push(addColorend);
document.write("<h3>Adds color at the end : </h3>" + colors + "<br><br>");

colors.unshift(" Orange ", " White ");
document.write("<h3>Add two more colors to the beginnings : </h3>" + colors + "<br><br>");

colors.shift();
document.write("<h3>Deleted first color : </h3>" + colors + "<br><br>");

colors.pop();
document.write("<h3>Deleted last color: </h3>" + colors + "<br><br>");


var addIndex = prompt("At which index do you want to add a color?");
var addColor = prompt("Enter the color name:");
colors.splice(addIndex, 0, addColor);
document.write("<h3>After adding color at index " + addIndex + ":</h3> " + colors + "<br><br>");

 var delIndex = prompt("At which index do you want to delete color(s)?");
var delCount = prompt("How many colors do you want to delete?");
colors.splice(delIndex, delCount);
document.write("<h3>After deleting colors:</h3>" + colors + "<br><br>");

// //Que 10
var studScores = [320, 230, 480, 120];
var assending = [...studScores].sort((a, b) => a - b);
console.log(assending);
document.write("Que.10<br><h3>Scores of Students : </h3>" + studScores + "<br>" +
   "<h3>Ordered Scores of Students :</h3>" + assending + "<br> <br>");

//Que 11
var cities = ["Karachi " , " Hyderabad " , " Peshawar " , " Multan " , " Islamabad "];
var selectedCities = cities.slice(0,4);
document.write("Que.11<br><h4>Cities List : </h4>" + cities );
document.write("<h4>Selected Cities List :</h4>" + selectedCities );

//Que 12
var array = ["This " , "is " , "my " , "cat "];
var joinMethod = ["This " , "is " , "my " , "cat "];
var result = joinMethod.join("");
document.write("Que.12<br><h3>Array :</h3> " + array);
document.write("<h3>String :</h3> " + result + "<br><br>");

//Que 13
var queue = [];

queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");

document.write("Que.13<br><h3>Devices :</h3>" + queue );
document.write("<h3>Out: </h3>" + queue.shift() + "<br>");
document.write("<h3>Out: </h3>" + queue.shift() + "<br>");
document.write("<h3>Out: </h3>" + queue.shift() + "<br>");
document.write("<h3>Out: </h3>" + queue.shift() + "<br>");

//Que 14
var stack = [];

stack.push("Keyboard");
stack.push("Mouse");
stack.push("Printer");
stack.push("Monitor");

document.write("Que.14<br><h3>Devices :</h3>" + stack );
document.write("<h3>Out: </h3>" + stack.pop() );
document.write("<h3>Out: </h3>" + stack.pop()  );
document.write("<h3>Out: </h3>" + stack.pop() );
document.write("<h3>Out: </h3>" + stack.pop() + "<br>");

//Que 15
var phones = ["Apple " ,"Samsung","Motorola","Nokia","Soni","Haier"];
document.write("Que.15<br>" +"<h3>Select a Phone Manufacturer:</h3>");
document.write("<select>");

for (var i = 0; i < phones.length; i++){
    document.write("<option>" + phones[i] + "</option>");
}
document.write("</select>");