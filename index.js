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
    let userDetailsJson = JSON.stringify(userDetails);

    

    localStorage.setItem('userDetails',userDetailsJson);
})