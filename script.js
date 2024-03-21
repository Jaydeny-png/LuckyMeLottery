function addName() {
    var nameInput = document.getElementById("nameInput");
    var name = nameInput.value.trim(); // Trim removes leading and trailing whitespace
    if (name !== "") {
      var table = document.getElementById("nameTable");
      var row = table.insertRow(-1); // Insert a new row at the last position
      var cell = row.insertCell(0); // Insert a cell in the row
      cell.textContent = name; // Set the cell content to the input name
      nameInput.value = ""; // Clear the input field after adding
    } else {
      alert("Please enter a name.");
    }
  }