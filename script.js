const canva = document.querySelector("#canva");



    for (let i = 0 ; i < 256 ; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        canva.appendChild(square);
    }

