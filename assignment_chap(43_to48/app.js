// Que 3 Table
var students = [
    { index:0, name:"Shamim" , class:10},
    { index:1, name:"Adiya" , class:10},
    {index:2, name:"Sarena" , class:10},
    { index:3, name:"Maryam" , class:10},
    { index:4, name:"Amna" , class:10},
    { index:5, name:"Ayesha" , class:10},
    { index:6, name:"Asfa" , class:10},
    { index:7, name:"Fatima" , class:10},
    { index:8, name:"Zainab" , class:10},
    { index:9, name:"Maham" , class:10},
];
var table = document.getElementById("studentTable");

for (var i = 0; i < students.length; i++) {
  var row = table.insertRow();
  row.insertCell(0).innerText = students[i].index;
  row.insertCell(1).innerText = students[i].name;
  row.insertCell(2).innerText = students[i].class;

  var actionCell = row.insertCell(3);
  var btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.onclick = (function(r) {
    return function() {
      r.remove();
    };
  })(row);
  actionCell.appendChild(btn);
}

// Que 4 Change image on mouseover
function changeImage() {
    document.getElementById("hoverImg").src = 
    " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStH5O-RzZIESnMyrZWRkunJb5s_9n5IbzkLA&s"
}

function resetImage() {
    document.getElementById("hoverImg").src = 
    "data:image/jpeg;base64,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 ";
}

// Que 5 Counter
var count = 0;
function increase() {
    count++;
    document.getElementById("counter").innerText = count;
}
function decrease() {
    count--;
    document.getElementById("counter").innerText = count;
}