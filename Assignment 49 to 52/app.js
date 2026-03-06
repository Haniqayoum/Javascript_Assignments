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
