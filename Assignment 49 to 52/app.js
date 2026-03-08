var mainContent = document.getElementById("main-content");
console.log(mainContent.children);
document.write(mainContent.children[2]);
var render = document.getElementsByClassName("render");
for (var i = 0; i< render.length; i++){
    console.log(render[i].innerHTML);
    document.write(render[i].innerHTML + "<br>");
}
var firstName = document.getElementById("first-name").value = "Hanii"
var LastName = document.getElementById("last-name").value = "A.Qayoom" 
var email = document.getElementById("email").value = "ummehaniabdulqayoom@gmail.com"

var nodeType = document.getElementById("form-content").nodeType;
console.log(nodeType);

var nodeTypeinp = document.getElementById("last-name").nodeType;
console.log(nodeTypeinp);
var nodeTypechild = document.getElementById("last-name").childNodes.nodeType;
console.log(nodeTypechild);

var LastName = document.getElementById("last-name").innerHTML = "Last Name: Qayoom";
var firstChild = document.getElementById("main-content");
console.log(firstChild.firstElementChild);
console.log(firstChild.lastElementChild);

var subling = document.getElementById("lastName");
console.log(subling.nextElementSibling);
console.log(subling.previousSibling);

var email = document.getElementById("email");
console.log(email.nodeType);
console.log(email.parentNode);

