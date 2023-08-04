let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

form.addEventListener("submit",addItem);

form.addEventListener("click",removeItem);

function addItem(e){
  e.preventDefault();
  
  let newItem = document.getElementById("item").value;
  
  let li = document.createElement("li");
  
  li.className = "list-group-item";
  
  li.appendChild(document.createTextNode(newItem));
  
  let delbtn = document.createElement("button");
  
  delbtn.className = "btn btn-danger btn-sm float-right delete"
  
  let delnode = document.createTextNode("X");
  
  delbtn.appendChild(delnode);
  
  li.appendChild(delbtn);
  
  itemList.appendChild(li);


}

function removeItem(e){
  if (e.target.classList.contains('delete'))
  {
    if (confirm('ARE YOU SURE?'))
    {
      let li = e.target.parentElement;
      itemlist.removeChild(li);
    }
  }
}







