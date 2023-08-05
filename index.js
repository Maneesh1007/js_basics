let form = document.getElementById("userform");

form.addEventListener('submit',function(event)
{
    event.preventDefault();
    const name = document.getElementById("fname").value;
    const email = document.getElementById("Email").value;
    const phone = document.getElementById("phoneno").value;
    const calltime = document.getElementById("timeforacall").value;

    let userDetails = {
        name : name,
        email : email,
        phone : phone,
        calltime : calltime,

    };
    let existingUserDetailsJSON = localStorage.getItem('userDetails');
  let existingUserDetails = existingUserDetailsJSON ? JSON.parse(existingUserDetailsJSON) : [];

  // Add the new user object to the array
  existingUserDetails.push(userDetails);

  // Convert the updated array to JSON and store it back in local storage
  let updatedUserDetailsJSON = JSON.stringify(existingUserDetails);
  localStorage.setItem('userDetails', updatedUserDetailsJSON);
})