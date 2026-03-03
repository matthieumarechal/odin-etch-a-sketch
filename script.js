const canva = document.querySelector("#canva");
const clear = document.querySelector("#clear");
const settings = document.querySelector("#settings");

// we choose to set grid size to 16 for the first print of the page
let gridSize = 16;
gridBuild(gridSize);

settings.addEventListener("click", () => {
   canva.innerHTML = ""; 
   gridSize = parseInt(prompt("choose grid size (max 100)"));
   console.log("Taille de la grille : " + gridSize);
   gridBuild(gridSize);

});

function gridBuild(gridSize) {

    squaresNumber = gridSize * gridSize;

    for (let i = 0 ; i < squaresNumber ; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", () => {
            square.classList.add("black");
        });
        canva.appendChild(square);
    }
}

// a clear button in order to remove the color to the painted squares



clear.addEventListener("click", () => {
    const grid = document.querySelectorAll(".square");
    grid.forEach(div => {
        div.classList.remove("black");
    });
});

