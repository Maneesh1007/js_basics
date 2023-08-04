let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

let filter = document.getElementById("filter");



form.addEventListener("submit",addItem);



itemList.addEventListener("click",removeItem);

filter.addEventListener("keyup",filterItems)

function addItem(e){
  e.preventDefault();
  
  let newItem = document.getElementById("item").value;

  let newItem1 = document.getElementById("item1").value;
  
  let li = document.createElement("li");
  
  li.className = "list-group-item";
  
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(" "+ newItem1));
  
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
      itemList.removeChild(li);
    }
  }
}


function filterItems(e){
  let text = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName("li");

  Array.from(items).forEach(function(item){
    let itemName = item.nextElementSibling.textContent;

    if (itemName.toLowerCase().indexOf(text)!= -1){
      item.style.display = "block";
    } else {
      item.style.display = "None";
    }
  })
}






