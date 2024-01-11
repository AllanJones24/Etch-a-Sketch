// Function to create the grid
const createGrid = (rows, cols) => {
  const gridContainer = document.getElementById("gridContainer");

  // Loop through rows and columns to create div elements
  for (let i = 0; i < rows * cols; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);

    // Add event listener for hover effect based on the selected color
    gridItem.addEventListener("mouseover", () => {
      const selectedColor = document.querySelector(".selected").id;
      gridItem.style.backgroundColor = selectedColor;
    });
  }
};

// Function to handle button click events
const handleButtonClick = (color) => {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
    });
  });
};

// Call the function to create a 16x16 grid
createGrid(16, 16);

handleButtonClick();
