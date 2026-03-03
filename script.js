const canva = document.querySelector("#canva");
const clear = document.querySelector("#clear");


const settings = document.querySelector("#settings");

for (let i = 0 ; i < 256 ; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
        square.classList.add("black");
    });
    canva.appendChild(square);
}

// a clear button in order to remove the color to the painted squares

const grid = document.querySelectorAll(".square");

clear.addEventListener("click", () => {
    grid.forEach(div => {
        div.classList.remove("black");
    });
});

