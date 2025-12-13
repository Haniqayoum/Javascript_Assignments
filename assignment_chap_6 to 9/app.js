//Que 1
var ten = 10;
var eleven = ++ten;
console.log(eleven);
//11
var a12 = ++eleven;
console.log(a12);
//12
var again11 = --a12;
console.log(again11);
//11
var answer = --again11;
console.log(answer);
document.write("<h1>Answer 1</h1> <br> " +
    "The value of a is: " + "10" + "<br>" +
    "----------------------- <br> <br>" +
    "The value of ++a is: " + a12 + "<br>" +
    "Now the value of a is: 11 <br><br>" +
    "The value of ++a is: " + a12 + "<br> " +
    "Now the value of a is: " + eleven + "<br> <br>" +
    "The value of --a is: " + a12 + "<br>" +
    "Now the value of a is: " + a12 + "<br> <br>" +
    "The value of a-- is: " + a12 + "<br>" +
    "Now the value of a is: " + answer + "<br><br><br>"
)


//Que 2
var a = 2;
var b = 1;
var formula = (--a) - (--b) + (++b) + (--b);
console.log(formula);
document.write("Answer 2 <br>" + "a is = 2  <br>  b is = 1  <br>  result is 2");


//Que 3
var user = prompt("Enter your Full Name: ");
alert("Hello " + user);


//Que 4
var num = prompt("Enter a number for table", "5");
var n = Number(num);
var table =
    n + " x 1 = " + (n * 1) + "\n" +
    n + " x 2 = " + (n * 2) + "\n" +
    n + " x 3 = " + (n * 3) + "\n" +
    n + " x 4 = " + (n * 4) + "\n" +
    n + " x 5 = " + (n * 5) + "\n" +
    n + " x 6 = " + (n * 6) + "\n" +
    n + " x 7 = " + (n * 7) + "\n" +
    n + " x 8 = " + (n * 8) + "\n" +
    n + " x 9 = " + (n * 9) + "\n" +
    n + " x 10 = " + (n * 10);

alert(table);

//Que 5
var sub1 = prompt("Enter 1st Subject: ", "English");
var sub2 = prompt("Enter 2nd Subject: ", "Urdu");
var sub3 = prompt("Enter 3rd Subject: ", "Maths");

var subjectMarks = 100;
var obtainedMarks1 = Number(prompt("Enter obtained marks of " + sub1));
var obtainedMarks2 = Number(prompt("Enter obtained marks of " + sub2));
var obtainedMarks3 = Number(prompt("Enter obtained marks of " + sub3));
var obtainedTotal = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalSubMarks = subjectMarks * 3;
var percentage = (obtainedTotal / totalSubMarks) * 100;

document.write("  <table border='1' cellpadding='8'>");
document.write(" <tr><th>Subjects</th><th>Total Marks</th><th>Obtained Marks</th> </tr>");
document.write("<tr><td>" + sub1 + "</td><td>" + subjectMarks + "</td><td>" + obtainedMarks1 + "</td></tr> ");
document.write("<tr><td>" + sub2 + "</td><td>" + subjectMarks + "</td><td>" + obtainedMarks2 + "</td></tr>  ");
document.write("<tr><td>" + sub3 + "</td><td>" + subjectMarks + "</td><td>" + obtainedMarks3 + "</td></tr> ");
document.write("<tr><th> Total </th> <th>" + totalSubMarks + "</th><th>" + obtainedTotal + "</th></tr> ");
document.write("<tr><th colspan='3'>Percentage: " + percentage + "%</th></tr>");
document.write("</table>");
