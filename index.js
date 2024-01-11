// Function to create the grid
function createGrid(rows, cols) {
  const gridContainer = document.getElementById("gridContainer");

  // Loop through rows and columns to create div elements
  for (let i = 0; i < rows * cols; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);
  }
}

// Call the function to create a 16x16 grid
createGrid(16, 16);
