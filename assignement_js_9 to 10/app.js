// var city = "Karachi";
// var welcome = "WElcome to city of lights";
// var user = prompt(city , welcome);

//Que 01
var userPropmt = prompt("Enter Your City:");
if (userPropmt == "karachi") {
    alert("Welcome the city of lights ");
    // if (userPropmt == "Multan") {
    //     alert ("Welcome to the City of Sufi's");
    // }
}
if (userPropmt === "multan") {
    alert("Welcome to City of Sufi's")
}
if (userPropmt === "islamabad") {
    alert("Capital of Pakistan")
}

//Que 2
var gender = prompt("Enter your gender please!");
if (gender === "female") {
    alert("Good Morning Ma'am")
}
if (gender === "male") {
    alert("Good Morning Sir!")
}

//Que 3
var signalColor = prompt("Red , Green , Yellow\nChoose Color:");

if (signalColor === "red") {
    Swal.fire("Must Stop!");
}

if (signalColor === "yellow") {
    Swal.fire("Ready to move!");
}

if (signalColor === "green") {
    Swal.fire("Move now");
}

//Que 4
var fuel = prompt("Remaining fuel in car (In Litres)");
if (fuel === "0.5litres") {
    Swal.fire("Please refill the fuel in your car");
}
if (fuel === "1litre") {
    Swal.fire("Ready to drive");
}
if (fuel === "2litre") {
    Swal.fire("Have a safe drive!")
}

//Que 5
//a.
var a = 4;
if (++a === 5) {
    Swal.fire("given condition for variable a is true");
    document.write("given condition for variable a is true  <br> <br>");
}
//b.
var b = 82;
if (b++ === 83) {
    Swal.fire("given condition for variable b is true");
    document.write("given condition for variable b is true <br> <br>")
}
//c.
var c = 12;
if (c++ === 13) {
    Swal.fire("condition 1 is true");
    document.write("condition 1 is true <br> <br>");
}
if (c === 13) {
    Swal.fire("condition 2 is true");
    document.write("condition 2 is true <br> <br>");
}
if (++c < 14) {
    Swal.fire("condition 3 is true");
    document.write("condition 3 is true <br> <br>");
}
if (c === 14) {
    Swal.fire("condition 4 is true");
    document.write("condition 4 is true <br> <br>");
}
//d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    Swal.fire("The cost equals");
    document.write("The cost equals <br> <br>");
}
//e.
if (true) {
    Swal.fire("True");
}
if (false) {
    Swal.fire("False");
}
//f.
if ("cat" < "car") {
    Swal.fire("cat is smaller than car")
}
//Que 6
var studMarksE = Number(prompt("Enter English Marks: "));
var studMarksU = Number(prompt("Enter Urdu Marks: "));
var studMarksM = Number(prompt("Enter Maths Marks: "));

var totalMarks = 300;
var obtainedMarks = studMarksE + studMarksM + studMarksU;
var percentage = (obtainedMarks / totalMarks) * 100;

function getGrade(percentage) {
    if (percentage >= 90) {
        return 'A  Remarks : Excellent Performance';
    } else if (percentage >= 80) {
        return 'B  Remarks : Good Performance';
    } else if (percentage >= 70) {
        return 'C  Remarks : Focus on study';
    } else if (percentage >= 60) {
        return 'D  Remarks : You need to improve';
    } else {
        return 'Fail';
    }
}
console.log(obtainedMarks, percentage);
console.log(getGrade(percentage));

document.write(" <fieldset> " +
    " <h2>Marksheet</h2>" +
    "Total Marks :" + totalMarks + "<br> <br>" +
    "Marks Obtained :" + obtainedMarks + "<br> <br>" +
    "Percentage :" + percentage + "<br> <br>" +
    "Grade :" + getGrade(percentage) + "<br><br>" +
    " </fieldset>")

//Que 7
var secretNum = 3;
var userGuessnum = Number(prompt("Guess the secret number"));
if (userGuessnum === secretNum) {
    Swal.fire("Bingo! Correct Answer");
} else if (userGuessnum !== secretNum) {
    Swal.fire("Close enough to the correct answer")
}


//Que 8
var num = Number(prompt("Number Which Divisible by 3"));
if (num % 3 === 0) {
    Swal.fire("The number is divisible by 3");
} else {
    Swal.fire("The number is not divisible by 3");
}

//Que 9
var check = +prompt("Check its even or odd");
if (check % 2 === 0) {
    Swal.fire("It's Even Number")
} else {
    Swal.fire("Its Odd Number")
}

//Que 10
var temperature = +prompt("What's weather today in your area?");
if (temperature >= 40) {
    Swal.fire("It is too hot outside")
} else if (temperature >= 30) {
    Swal.fire("The weather today is normal")
} else if (temperature >= 20) {
    Swal.fire("Today's weather is cool")
} else if (temperature >= 10) {
    Swal.fire("OMG! Winter Season ")
}
