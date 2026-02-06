//document.write(" " + "<br><br>");

console.log(moment().format("ddd, MMM Do YYYY, h:mm:ss a") + " GMT+0500 (PKT)");
document.write("Current Date and Time  " + "<br>" +
    moment().format("ddd, MMM Do YYYY, h:mm:ss a") + " GMT+0500 (PKT)" + "<br><br>");

 var currentMonth = moment().format("MMMM");
 alert("Current Month : " + currentMonth);

var currentDay = moment().format("ddd");
alert ("Today is : " + currentDay);

var funDay = moment().format("ddd");
if (funDay === "Fri" || funDay === "Sat" || funDay === "Sun") {
   alert ("It's Fun Day"); 
} else{
    alert ("It's Working Day");
}

var dateMonth = moment().date();
console.log(dateMonth);
if (dateMonth <= 15) {
    alert ("First fifteen days of the month");
} else{
    alert("Last days of the month");
}

var currentTime = moment().toString();
var minutes = moment().diff(moment("1970-01-01"), "minutes");
var miliseconds = moment().diff(moment("1970-01-01"), "miliseconds");

document.write("Current Date : " + currentTime + "<br>");
document.write("Elapsed miliseconds since janaury 1, 1970 : " + miliseconds + "<br>");
document.write("Elapsed minutes since janaury 1, 1970 :  " + minutes + "<br><br>");

var ampm = moment().format("kk");
if (ampm < 12) {
    document.write("It's AM" + "<br><br>");
} else {
    document.write("It's PM" + "<br><br>");
}

var laterDate = new Date(2020, 11, 31);
document.write("Later Date : " + laterDate + "<br><br>");

var ramzanCalender = moment().diff(moment("2025-03-01"), "days");
document.write(ramzanCalender + " days have been passed since 1st Ramzan ,2025 " + "<br><br>");

var start = moment("2015-01-01 00:00:00");
var end = moment("2015-12-05 22:50:16");
var seconds = end.diff(start, "seconds");
document.write("On refernce date Sat " + end.format("YYYY MMM Do") + " 22:50:16 GMT+0500 (PKT), " + "<br>" +
    seconds + " seconds had passed since begginning of 2015" + "<br><br>");

var currntDate = moment("2015-12-05  23:08:16");
var hourAgo = currntDate.clone().subtract(1, "hour");
document.write("Current date : " + currntDate.format
    ("ddd MMM Do YYYY HH:mm:ss " + "+0500 (PKT)") + "<br>");
document.write("1 hour ago, it was " + hourAgo.format("ddd MMM Do YYYY HH:mm:ss " + "+0500 (PKT)" + "<br><br>"));

var todayDate = moment();
var hundredYear = todayDate.clone().subtract(100, "year");
alert(
    "Current date : " +
    todayDate.format("ddd MMM Do YYYY HH:mm:ss") +
    " +0500 (PKT)\n\n" +
    "100 years back, it was : " +
    hundredYear.format("ddd MMM Do YYYY HH:mm:ss") +
    " +0500 (PKT)"
);

var userbdy = Number(prompt("Enter your birth year"));
var currentYear = moment().year();
var age = currentYear - userbdy;
document.write("Your age is " + age);
document.write("<br> Your birth year is " + userbdy + "<br><br>");

var customerName = prompt("Enter your name ");
var currentMonth = moment().format("MMMM");
var numberOfUnits = 410;
var chargesPerunit = 16;
var netAmountpayable ;
var latePayment = 350;
var grossAmountpayable;
netAmountpayable = numberOfUnits * chargesPerunit;
grossAmountpayable = netAmountpayable + latePayment;

document.write("<h1>K-Electric Bill</h1>" );
document.write("Customer Name : " + customerName + "<br>");
document.write("Month : " + currentMonth + "<br>");
document.write("Numbers of units : " + numberOfUnits + "<br>");
document.write("Charges per unit : " + chargesPerunit + "<br><br>");
document.write("Net Amount Payable (within Due Date) : " + netAmountpayable + "<br>");
document.write("Late Payment Surcharge : " + latePayment + "<br>");
document.write("Gross Amount Payable : " + grossAmountpayable+ "<br><br>");