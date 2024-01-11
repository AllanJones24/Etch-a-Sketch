// Function to create the grid
const createGrid = (rows, cols) => {
  const gridContainer = document.getElementById("gridContainer");

  // Calculate the width and height of each grid item based on user input
  const itemWidth = 85 / cols + "vh";
  const itemHeight = 85 / rows + "vh";

  // Loop through rows and columns to create div elements
  for (let i = 0; i < rows * cols; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.width = itemWidth;
    gridItem.style.height = itemHeight;
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
  buttons[0].classList.add("selected");
};

const resetGrid = () => {
  const gridItems = document.querySelectorAll(".grid-item");
  const clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", () => {
    gridItems.forEach((item) => (item.style.backgroundColor = "white"));
  });
};

const resizeGrid = () => {
  const resizeButton = document.querySelector("#resize");
  resizeButton.addEventListener("click", () => {
    const gridContainer = document.getElementById("gridContainer");
    let rows = prompt("Enter the number of rows");
    let cols = prompt("Enter the number of columns");

    if (isValidInput(rows) && isValidInput(cols)) {
      clearGrid();
      createGrid(rows, cols);

      // Reattach event listeners
      handleButtonClick();
      resetGrid();
    } else {
      alert("Invalid input. Please enter a valid number.");
    }
  });
};

const clearGrid = () => {
  const gridContainer = document.getElementById("gridContainer");
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
};

const isValidInput = (input) => {
  return !isNaN(input) && input > 0 && input <= 100; // Check if input is a number greater than 0
};

// Call the function to create a 16x16 grid
createGrid(16, 16);

handleButtonClick();
resetGrid();
resizeGrid();
