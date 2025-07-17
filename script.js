const container = document.getElementById("container");
const resizeButton = document.getElementById("resize-button");

function createGrid(size) {
  container.innerHTML = "";

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

resizeButton.addEventListener("click", () => {
  let newSize = parseInt(prompt("Enter grid size (max 100):"), 10);
  if (newSize && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

createGrid(16);