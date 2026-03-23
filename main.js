function viewDetails(Name,Email,Phone,Department,) {
    alert(
        "Employee Details:\n\n" +
        "Name: " + Name + "\n" +
        "Email: " + Email + "\n" +
        "Phone: " + Phone + "\n" +
        "Department: " + Department
    );
}

function editContact() {
    alert("Edit feature coming soon!");
}

function deleteContact() {
    let confirmDelete = confirm("Are you sure you want to delete?");
    if (confirmDelete) {
        alert("Deleted!");
        let row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
}