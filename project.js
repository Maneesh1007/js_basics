
    document.addEventListener("DOMContentLoaded", function () {
      // Load existing data from local storage and display it on the screen
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const userDetails = JSON.parse(localStorage.getItem(key));
        displayUserDetails(userDetails);
      }
    });

    const form = document.getElementById("userform");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("fname").value;
      const email = document.getElementById("Email").value;
      const phone = document.getElementById("phoneno").value;

      let userDetails = {
        name: name,
        email: email,
        phone: phone,
      };

      // Save the data to local storage
      localStorage.setItem(userDetails["email"], JSON.stringify(userDetails));

      // Display the user details on the screen
      displayUserDetails(userDetails);

      form.reset();
    });

    function displayUserDetails(userDetails) {
      let newNode =
        userDetails["name"] + " --- " + userDetails["email"] + " --- " + userDetails["phone"];

      let label = document.createElement("label");
      label.appendChild(document.createTextNode(newNode));

      form.appendChild(label);

      let deleteBtn = document.createElement("button");
      deleteBtn.appendChild(document.createTextNode("Delete"));
      form.appendChild(deleteBtn);

      let editBtn = document.createElement("button");
      editBtn.appendChild(document.createTextNode("Edit"));
      form.appendChild(editBtn);

      const nameBreak = document.createElement("br");
      form.appendChild(nameBreak);

      deleteBtn.addEventListener("click", function removeItem(event) {
        localStorage.removeItem(userDetails["email"]);
        form.removeChild(deleteBtn);
        form.removeChild(editBtn);
        form.removeChild(nameBreak);
        form.removeChild(label);
      });

      editBtn.addEventListener("click", function popupelements(event) {
        document.getElementById("fname").value = userDetails["name"];
        document.getElementById("Email").value = userDetails["email"];
        document.getElementById("phoneno").value = userDetails["phone"];
        localStorage.removeItem(userDetails["email"]);

        form.removeChild(editBtn);
        form.removeChild(deleteBtn);
        form.removeChild(nameBreak);
        form.removeChild(label);
      });
    }

