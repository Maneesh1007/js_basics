let form = document.getElementById("userform");

form.addEventListener('submit',function(event)
{
    event.preventDefault();
    const name = document.getElementById("fname").value;
    const email = document.getElementById("Email").value;
    const phone = document.getElementById("phoneno").value;
  

    let userDetails = {
        name : name,
        email : email,
        phone : phone,
       

    };
    
    localStorage.setItem(userDetails["email"], JSON.stringify(userDetails));
    let newNode = userDetails["name"]+" --- "+userDetails["email"]+" --- "+userDetails["phone"];

  

    let label = document.createElement("label");
    
    label.appendChild(document.createTextNode(newNode));
      
    
    form.appendChild(label);
    
    let deletebtn = document.createElement("button");
    
    deletebtn.appendChild(document.createTextNode("Delete"));
    
    form.appendChild(deletebtn);

    let editBtn = document.createElement("button");

    editBtn.appendChild(document.createTextNode("Edit"));

    form.appendChild(editBtn);
    
    const nameBreak = document.createElement("br");
    form.appendChild(nameBreak);
    

    deletebtn.addEventListener('click',function removeItem(event){
      localStorage.removeItem(userDetails["email"]);

      form.removeChild(deletebtn);
      form.removeChild(editBtn);
      form.removeChild(nameBreak);
      form.removeChild(label);
    })

    editBtn.addEventListener("click",function popupelements(event){

      document.getElementById("fname").value = userDetails["name"];
      document.getElementById("Email").value = userDetails["email"];
      document.getElementById("phoneno").value = userDetails["phone"];
      localStorage.removeItem(userDetails["email"]);

      form.removeChild(editBtn);
      form.removeChild(deletebtn);
      form.removeChild(nameBreak);
      form.removeChild(label);




    })
  

})



