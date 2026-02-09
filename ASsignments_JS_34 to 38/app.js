var currentdate = new Date();
console.log(currentdate);
document.write(currentdate + "<br><br>");

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" ", lastName);
// document.write("Welcome " + fullName + "<br><br>");

// function sum(a, b) {
//     var ans = parseInt(a) + parseInt(b);
//     console.log(ans);
//     return ans;
// }
// sum(
//     prompt("Enter first number"),
//     prompt("Enter second number")
// );

// function calculator(){
//    var num1 = Number(prompt("Number for calculation"));
//    var num2 = Number(prompt("Number for calculation"));
//    var operator = prompt("Enter operator ( + , - , * , / )");

//    var operation = "";
//    if (operator == "+") {
//     operation = num1 + num2;
//    } else if (operator == "-") {
//     operation = num1 - num2;
//    } else if (operator == "*") {
//     operation = num1 * num2;
//    } else if(operator == "/") {
//     operation = num1 / num2;
//    } else{
//     operation = "Invalid Operator";
//    }
//    alert (num1 + " " + operator + " " + num2 + "=" + operation);
//    return operation;
// }
// var result = calculator();
// alert (num1 + " " + operator + " " + num2 + "=" + result);

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

// function counting(){
//     var start =Number(prompt("Counting start from"));
//     var end = Number(prompt("Counting end at"));
//     for (var i = start; i <= end; i++){
//         document.write(i + "<br>");
//     }
// }
// counting();

function calculateHypotenuse( b , p){
    function calculateSquare(num){
        return num ** 2;
    }
    var hypotenuse = calculateSquare(b) + calculateSquare(p);
    console.log(hypotenuse);    
}
calculateHypotenuse(3,4);

