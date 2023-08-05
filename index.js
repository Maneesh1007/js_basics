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
    let existingUserDetailsJSON = localStorage.getItem('userDetails');
  let existingUserDetails = existingUserDetailsJSON ? JSON.parse(existingUserDetailsJSON) : [];

  //console.log(userDetails["name"]+" "+userDetails["email"]+" "+userDetails["phone"]);

  // Add the new user object to the array
  existingUserDetails.push(userDetails);

  // Convert the updated array to JSON and store it back in local storage
  let updatedUserDetailsJSON = JSON.stringify(existingUserDetails);
  localStorage.setItem('userDetails', updatedUserDetailsJSON);

  let newNode = userDetails["name"]+" --- "+userDetails["email"]+" --- "+userDetails["phone"];

  

  let label = document.createElement("label");

  label.appendChild(document.createTextNode(newNode));
  

  form.appendChild(label);

  const nameBreak = document.createElement("br");
  form.appendChild(nameBreak);

  

})

