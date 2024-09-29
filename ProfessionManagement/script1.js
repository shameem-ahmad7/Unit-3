function addData(e) {
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const age = document.getElementById("age").value;

    document.body.innerHTML += `
    <div class='row-container'>
    <table class="table">
        <tr class="row">
            <td>${name}</td>
            <td>${profession}</td>
            <td>${age}</td>
        </tr>
    </table>
    <button class="delete">Delete</button>
    </div>
    `;

    // Apply styles to the newly added row container
    let rowContainer = document.getElementsByClassName('row-container');
    rowContainer[rowContainer.length - 1].style.display = 'flex';  // Use flexbox to align the row and button side by side
    rowContainer[rowContainer.length - 1].style.alignItems = 'center';
    rowContainer[rowContainer.length - 1].style.gap = '25px';
}

// Add event delegation for delete buttons
document.body.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('delete')) {
        // Remove the parent row container of the delete button
        e.target.parentElement.remove();
    }
});
