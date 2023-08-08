document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userform");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const price = parseFloat(document.getElementById("price").value);
        const dish = document.getElementById("dish").value;
        const selectedTable = document.getElementById("tableSelect").value;

        // Storing the details
        let userDetails ={
            price : price,
            dish : dish,
            selectedTable : selectedTable
        }

        // Find the corresponding table element
        const tableElement = document.getElementById(selectedTable);
        const orderDisplay = document.createElement("div");
        orderDisplay.classList.add("order-display");

        const orderInfo = document.createElement("p");
        orderInfo.textContent = `Price: $${price.toFixed(2)}, Dish: ${dish}`;
        orderDisplay.appendChild(orderInfo);

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.appendChild(document.createTextNode("Delete Item"));
        orderDisplay.appendChild(deleteBtn);

        tableElement.appendChild(orderDisplay);

        // Storing to the external server
        axios.post("https://crudcrud.com/api/9798ba225fa643bc9a60e8e00a59259c/RestaurantBill", userDetails)
            .then(res => console.log(res))
            .catch(err => console.log(err));

        // Clear form inputs
        document.getElementById("price").value = "";
        document.getElementById("dish").value = "";

        // Add delete event listener to the newly created delete button
        deleteBtn.addEventListener("click", function () {
            orderDisplay.remove();
            // Here you can also add code to delete the corresponding data from the server
            axios.delete("https://crudcrud.com/api/9798ba225fa643bc9a60e8e00a59259c/RestaurantBill/"+userDetails["_id"])
                .then(res => console.log(res))
                .catch(err => console.log(err));
        });
       
    });
    
});
