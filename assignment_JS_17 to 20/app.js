//Que 1
var empty = [[][null]];

//Que 2
var multi = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
]
console.log(multi);

//Que 3
for (var i = 1; i <= 10; i++) {
    //console.log(i);
    document.write(i + "<br>");
}

//Que 4
var table = +prompt("Number for print table : ");
var tableLength = +prompt("Enter length of table")
for (var i = 1; i <= tableLength; i++) {
    console.log(table + " x " + i + " = " + (table * i));
    document.write("<br>" + table + " x " + i + " = " + (table * i) + "<br>");
};

//Que 5
var fruits = [" Mango ", " Chikoo ", " Orange ", " Apple"];
for (var f = 0; f < fruits.length; f++) {
    console.log(fruits[f]);
    document.write(fruits[f] + "<br>");
    document.write("Element at index " + f + " is" + fruits[f] + "<br>");
};

//Que 6
document.write("<h3>Counting :</h3> ");
for (var count = 1; count <= 15; count++) {
    document.write(count + ",");
}

document.write("<h3>Reverse Counting :</h3> ");
for (var rev = 10; rev >= 1; rev--) {
    document.write(rev + ",");
}
document.write("<h3>Even :</h3> ");
for (var i = 0; i <= 20; i += 2) {
    //console.log(i);
    document.write(i + ",");
}

document.write("<h3>Odd :</h3> ");
for (var odd = 1; odd < 20; odd += 2) {
    //console.log(odd);
    document.write(odd + ",");
}

document.write("<h3>Series :</h3> ");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + "k,");

}

//Que 7 
var menu = ["CAKE", "APPLE PIE", "COOKIE", "CHIPS", "PATTIES"];
var costumer = prompt("Welcome to the Hanii bakery, We have CAKE , APPLE PIE , COOKIES , CHIPS , PATTIES in menu.");
costumer = costumer.toUpperCase();
var flag = false;

for (var i = 0; i < menu.length; i++) {
    if (menu[i] === costumer) {
        flag = true;
        document.write("<br><p>"+costumer + " is available at index " + i + " in our bakery</p>");
  break;
    }
}
if (!flag) {
    document.write("<br><p>We are sorry " +costumer + " is not available in our bakery</p>");
}

//Que 8
var A = [24, 53, 78, 91, 12];
var maxA = A[0];
 for (var i = 0; i< A.length; i++){
    if (A[i] > maxA) {
        maxA = A[i];
    }
 }
 console.log(maxA);
 document.write("Array Items : " + A + "<br>");
 document.write("The largest number is " + maxA + "<br><br>");

 //Que 9
 var B =  [24, 53, 78, 91, 12];
 var maxB  = Number.POSITIVE_INFINITY;
 for(var small = 0; small < B.length; small++){
    if (B[small] < maxB){
        maxB = B[small];
    }
 }
 console.log(maxB);
document.write("Array Items : " + B + "<br>");
 document.write("The smallest number is " + maxB + "<br><br>");
 

 //Que 10
for ( let i = 1; i <= 100 ;i++){ //var use krne se 1 to 100 arha tw let use krenge
    if (i % 5 === 0) {
        console.log(i + ",");
        document.write(i + ",");
    }
}