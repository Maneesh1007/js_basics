let itemsList = document.querySelector("#items");

console.log(itemsList.parentElement);

console.log(itemsList.lastElementChild);

console.log(itemsList.previousElementSibling);

let newDiv = document.createElement('div');

newDiv.className = "hii";

newDiv.id = "hiiii";

newDiv.setAttribute("tittle","hello");

let insertedText = document.createTextNode("HELLo word");

newDiv.appendChild(insertedText);

newDiv.fontSize = "30px"

let h1 = document.querySelector("#header-title");

let container = document.querySelector(".container");

container.insertBefore(newDiv,h1);

let h2 = document.querySelector(".list-group-item");

door = document.querySelector("#items");

door.insertBefore(newDiv,h2);







