function addData(e) {
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const age = document.getElementById("age").value;

    // Create a container div for the table and the delete button
    const rowContainer = document.createElement('div');
    rowContainer.setAttribute('class', 'row-container');
    rowContainer.style.display = 'flex';  // Use flexbox to align the row and button side by side
    rowContainer.style.alignItems = 'center';
    rowContainer.style.gap = '25px'

    table=document.createElement("table");
    table.setAttribute('id', 'table');
    
    // Add the row inside the table
    const row = table.insertRow();
    row.setAttribute('class', 'row');
    const nameCell = row.insertCell(0);
    const professionCell = row.insertCell(1);
    const ageCell = row.insertCell(2);

    // Set the content for the table cells
    nameCell.textContent = name;
    professionCell.textContent = profession;
    ageCell.textContent = age;

    // Clear input fields after adding data
    document.getElementById("name").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("age").value = "";

    // Create a delete button inside 
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete');
    deleteBtn.textContent = "Delete";


    // Append the table row and button to the rowContainer
    rowContainer.appendChild(table);  // Keep the table row in one part
    rowContainer.appendChild(deleteBtn);  // Keep the button in another part

    // Add the entire rowContainer to the body
    document.body.appendChild(rowContainer);

    // Add event listener to delete the row when delete button is clicked
    deleteBtn.addEventListener('click', () => {
        rowContainer.remove();
    });
}
